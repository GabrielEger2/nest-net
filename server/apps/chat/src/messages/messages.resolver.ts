import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { MessageDocument } from './models/message.models';
import { CreateMessageInput } from './dto/create-message.dto';
import { CurrentUser, UserDto } from '@app/common';
import { GetMessagesArgs } from './dto/get-messages.dto';

@Resolver(() => MessageDocument)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Mutation(() => MessageDocument)
  async createMessage(
    @Args('createMessageInput') createMessageInput: CreateMessageInput,
    @CurrentUser() user: UserDto,
  ) {
    return this.messagesService.createMessage(createMessageInput, user._id);
  }

  @Query(() => [MessageDocument], { name: 'messages' })
  async getMessages(
    @Args() getMessageArgs: GetMessagesArgs,
    @CurrentUser() user: UserDto,
  ) {
    return this.messagesService.getMessages(getMessageArgs, user._id);
  }
}
