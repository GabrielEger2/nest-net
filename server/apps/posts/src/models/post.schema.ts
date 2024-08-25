import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema({ versionKey: false })
@ObjectType()
export class PostDocument extends AbstractDocument {
  @Prop()
  @Field()
  timestamp: Date;

  @Prop()
  @Field()
  userId: string;

  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  content: string;

  @Prop()
  @Field()
  githubLink: string;
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);
