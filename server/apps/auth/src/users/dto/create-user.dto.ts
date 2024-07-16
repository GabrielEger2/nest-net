import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  username: string;

  @IsStrongPassword()
  @Field()
  password: string;
}
