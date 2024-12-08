import { Injectable } from '@nestjs/common';
import { CreateChatInput } from './dto/create-chat.dto';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatService {
  constructor(private readonly chatsRepository: ChatRepository) {}

  async create(createChatInput: CreateChatInput, userId: string) {
    return this.chatsRepository.create({
      ...createChatInput,
      userId,
      userIds: createChatInput.userIds || [],
      messages: [],
    });
  }

  async findAll() {
    return this.chatsRepository.find({});
  }

  async findOne(_id: string) {
    return this.chatsRepository.findOne({ _id });
  }
}
