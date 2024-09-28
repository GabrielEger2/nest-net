import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@ObjectType()
@Schema()
export class MessageDocument extends AbstractDocument {
  @Field()
  @Prop()
  content: string;

  @Field()
  @Prop()
  createdAt: Date;

  @Field()
  @Prop()
  userId: string;
}

export const MessageSchema = SchemaFactory.createForClass(MessageDocument);
