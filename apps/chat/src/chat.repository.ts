import { AbstractRepository } from '@app/common';
import { ChatDocument } from './models/chat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ChatRepository extends AbstractRepository<ChatDocument> {
  protected readonly logger = new Logger(ChatRepository.name);

  constructor(
    @InjectModel(ChatDocument.name)
    postModel: Model<ChatDocument>,
  ) {
    super(postModel);
  }
}
