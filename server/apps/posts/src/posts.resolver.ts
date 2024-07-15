import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostDocument } from './models/post.schema';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CurrentUser, UserDto } from '@app/common';

@Resolver(() => PostDocument)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => PostDocument)
  createPost(
    @Args('createPostInput')
    createPostInput: CreatePostDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.postsService.create(createPostInput, user._id);
  }

  @Query(() => [PostDocument], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => PostDocument, { name: 'post' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => PostDocument)
  removePost(@Args('id', { type: () => String }) id: string) {
    return this.postsService.remove(id);
  }
}
