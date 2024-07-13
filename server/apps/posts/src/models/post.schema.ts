import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class PostDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;

  @Prop()
  userId: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);
