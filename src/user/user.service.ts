import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>, // @InjectConnection() private connection: Connection,
  ) {}

  create() {
    this.userModel.create();
    return this.userModel.create({
      breed: '테스트',
      age: 10,
    });
  }

  findAll() {
    return this.userModel.find({});
  }

  findOne(id: number) {
    return this.userModel.findById(id);
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
