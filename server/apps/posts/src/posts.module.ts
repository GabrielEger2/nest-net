import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { PostsRepository } from './posts.repository';
import { PostDocument, PostSchema } from './models/post.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: PostDocument.name, schema: PostSchema },
    ]),
    LoggerModule,
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
