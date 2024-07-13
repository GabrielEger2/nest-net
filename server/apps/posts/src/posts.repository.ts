import { AbstractRepository } from '@app/common';
import { PostDocument } from './models/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PostsRepository extends AbstractRepository<PostDocument> {
  protected readonly logger = new Logger(PostsRepository.name);

  constructor(
    @InjectModel(PostDocument.name)
    postModel: Model<PostDocument>,
  ) {
    super(postModel);
  }
}
