import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Hospital, HospitalDocument } from 'src/schemas/hospital.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.userModel.create();
    return this.userModel.create({
      email: createUserDto.email,
      password: createUserDto.password,
    });
  }

  findAll() {
    return this.userModel.find({});
  }

  async findOne(id: string) {
    return await (
      await this.userModel.findById(id)
    ).populate('recent_hospital');
  }

  async update(user: UserDocument) {
    return await this.userModel.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          introduction: user.introduction,
          animal_type: user.animal_type,
          address: user.address,
          profile_image: user.profile_image,
          location: user.location,
        },
        $addToSet: {
          recent_hospital: user.recent_hospital,
          recent_pharmacy: user.recent_pharmacy,
          recent_review: user.recent_review,
          like_hospital: user.like_hospital,
          like_pharmacy: user.like_pharmacy,
          like_review: user.like_review,
          like_reply: user.like_reply,
        },
      },
      {
        runValidators: true,
      },
    );
  }

  async remove(id: string) {
    return await this.userModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          delete_date: Date.now(),
        },
      },
    );
  }

  async findList(ids: string[]) {
    return await this.userModel.find({
      _id: {
        $in: ids,
      },
    });
  }
}
