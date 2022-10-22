import { User, UserDocument } from 'src/schemas/user.schema';
import { Hospital, HospitalDocument } from './schemas/hospital.schema';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(userId: String) {
    return this.hospitalModel.create({
      breed: '테스트',
      age: 10,
      realOwner: userId,
      owner: [userId],
    });
  }

  findAll(userId: string) {
    return this.hospitalModel.find({
      realOwner: userId,
    });
  }

  findOne(id: number) {
    return this.hospitalModel.findById(id);
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
