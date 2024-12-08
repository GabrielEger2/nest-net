import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { MessageSchema, MessageDocument } from './models/message.models';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: MessageDocument.name, schema: MessageSchema },
    ]),
  ],
  providers: [MessagesService, MessagesResolver],
  exports: [MessagesService],
})
export class UsersModule {}
