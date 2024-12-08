import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto, userId: string) {
    return this.postsRepository.create({
      ...createPostDto,
      timestamp: new Date(),
      userId,
    });
  }

  findAll() {
    return this.postsRepository.find({});
  }

  findOne(_id: string) {
    return this.postsRepository.findOne({ _id });
  }

  update(_id: string, updatePostDto: UpdatePostDto) {
    return this.postsRepository.findOneAndUpdate(
      { _id },
      { $set: updatePostDto },
    );
  }

  remove(_id: string) {
    return this.postsRepository.findOneAndDelete({ _id });
  }
}
