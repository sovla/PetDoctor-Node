import { User, UserDocument } from 'src/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Hospital, HospitalDocument } from 'src/schemas/hospital.schema';
import { CreateHospitalDto } from './dto/create-hospital.dto';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(createHospitalDto: CreateHospitalDto) {
    const { address, ...hospital } = createHospitalDto;
    return this.hospitalModel.create({
      ...hospital,
      address: address,
    });
  }

  async findAll() {
    return await this.hospitalModel.find({});
  }

  async findOne(id: string) {
    return await this.hospitalModel
      .findOne({
        _id: id,
      })
      .populate('link_category_id');
  }

  async findList(ids: string[]) {
    return await this.hospitalModel.find({
      _id: {
        $in: JSON.parse(ids as any),
      },
    });
  }

  async update(hospitalDocument: HospitalDocument) {
    const { link_category_id, ...hospital } = hospitalDocument;
    const update = await this.hospitalModel.updateOne(
      {
        _id: hospitalDocument.id,
      },
      {
        $set: {
          ...hospital,
        },
        $addToSet: {
          link_category_id: link_category_id,
        },
      },
    );

    return await this.hospitalModel.findOne({ _id: hospital.id });
  }

  async remove(id: string) {
    return await this.hospitalModel.updateOne(
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
}
