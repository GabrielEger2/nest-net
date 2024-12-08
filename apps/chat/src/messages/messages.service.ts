import { Injectable } from '@nestjs/common';
import { ChatRepository } from '../chat.repository';
import { CreateMessageInput } from './dto/create-message.dto';
import { MessageDocument } from './models/message.models';
import { Types } from 'mongoose';
import { GetMessagesArgs } from './dto/get-messages.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly chatRepository: ChatRepository) {}

  async createMessage({ content, chatId }: CreateMessageInput, userId: string) {
    const message: MessageDocument = {
      content,
      userId,
      createdAt: new Date(),
      _id: new Types.ObjectId(),
    };
    await this.chatRepository.findOneAndUpdate(
      {
        _id: chatId,
        ...this.userChatFilter(userId),
      },
      {
        $push: {
          messages: message,
        },
      },
    );
    return message;
  }

  private userChatFilter(userId: string) {
    return {
      $or: [
        { userId },
        {
          userIds: {
            $in: [userId],
          },
        },
      ],
    };
  }

  async getMessages({ chatId }: GetMessagesArgs, userId: string) {
    return (
      await this.chatRepository.findOne({
        _id: chatId,
        ...this.userChatFilter(userId),
      })
    ).messages;
  }
}
