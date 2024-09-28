import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { ChatDocument } from './models/chat.schema';
import { CreateChatInput } from './dto/create-chat.dto';
import { CurrentUser, UserDto } from '@app/common';

@Resolver(() => ChatDocument)
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  @Mutation(() => ChatDocument)
  createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() user: UserDto,
  ) {
    return this.chatService.create(createChatInput, user._id);
  }

  @Query(() => [ChatDocument], { name: 'chats' })
  findAll() {
    return this.chatService.findAll();
  }

  @Query(() => ChatDocument, { name: 'chat' })
  findOne(@Args('_id') _id: string) {
    return this.chatService.findOne(_id);
  }
}
