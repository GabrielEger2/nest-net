import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { DatabaseModule, LoggerModule, AUTH_SERVICE } from '@app/common';
import { ChatRepository } from './chat.repository';
import { ChatDocument, ChatSchema } from './models/chat.schema';
import * as Joi from 'joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ChatResolver } from './chat.resolver';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ChatDocument.name, schema: ChatSchema },
    ]),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [ChatService, ChatRepository, ChatResolver],
})
export class ChatModule {}
