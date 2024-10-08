import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema({ versionKey: false })
@ObjectType()
export class UserDocument extends AbstractDocument {
  @Prop()
  @Field()
  joinedAt: Date;

  @Prop()
  @Field()
  email: string;

  @Prop()
  @Field()
  username: string;

  @Prop()
  @Field()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
