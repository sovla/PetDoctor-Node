import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class DeleteUseDto {
  @ApiProperty()
  id: mongoose.Types.ObjectId;
}
