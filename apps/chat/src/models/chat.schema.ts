import { ObjectType, Field } from '@nestjs/graphql';
import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MessageDocument } from '../messages/models/message.models';

@Schema({ versionKey: false })
@ObjectType()
export class ChatDocument extends AbstractDocument {
  @Prop()
  @Field()
  userId: string;

  @Prop()
  @Field()
  isPrivate: boolean;

  @Prop([String])
  @Field(() => [String])
  userIds: string[];

  @Prop()
  @Field({ nullable: true })
  name?: string;

  @Prop([MessageDocument])
  messages: MessageDocument[];
}

export const ChatSchema = SchemaFactory.createForClass(ChatDocument);
