import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pharmacy, PharmacyDocument } from 'src/schemas/pharmacy.schema';
import { CreatePharmacyDto } from './dto/pharmacy.dto';

@Injectable()
export class PharmacyService {
  constructor(
    @InjectModel(Pharmacy.name) private PharmacyModel: Model<PharmacyDocument>,
  ) {}

  create(createPharmacyDto: CreatePharmacyDto) {
    const { address, ...Pharmacy } = createPharmacyDto;
    return this.PharmacyModel.create({
      ...Pharmacy,
      address: address,
    });
  }

  async findAll() {
    return await this.PharmacyModel.find({});
  }

  async findOne(id: string) {
    return await this.PharmacyModel.findOne({
      _id: id,
    }).populate('link_category_id');
  }

  async findList(ids: string[]) {
    return await this.PharmacyModel.find({
      _id: {
        $in: JSON.parse(ids as any),
      },
    });
  }

  async update(PharmacyDocument: PharmacyDocument) {
    const { link_category_id, ...Pharmacy } = PharmacyDocument;
    const update = await this.PharmacyModel.updateOne(
      {
        _id: PharmacyDocument.id,
      },
      {
        $set: {
          ...Pharmacy,
        },
        $addToSet: {
          link_category_id: link_category_id,
        },
      },
    );

    return await this.PharmacyModel.findOne({ _id: Pharmacy.id });
  }

  async remove(id: string) {
    return await this.PharmacyModel.updateOne(
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
