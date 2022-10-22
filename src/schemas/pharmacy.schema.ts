import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document, Number } from 'mongoose';
import { Address, Coordinate, OpeningHours } from './hospital.schema';

export type PharmacyDocument = Pharmacy & Document;

// 스키마 정의를 표시하는 데코레이터
@Schema()
export class Pharmacy {
  // @Prop 데코레이터는 문서의 속성을 정의함/ 타입은 암시적으로 유추하지만 @Prop([String]) 명시적으로 표시하는 것이 좋음
  //   @Prop({
  //     type: String, 타입지정
  //     required: true, 필수값
  //     ref: 'Owner' 관계 지정 owners 또는 Owner 컬렉션이 있어야함
  //   })
  //   name: string;

  @Prop()
  age: number;

  @Prop({
    type: String,
  })
  name: string;
  @Prop({
    type: String,
  })
  phone: string;
  @Prop({
    type: String,
  })
  homepage: string;
  @Prop({
    type: String,
  })
  business_status: string;
  @Prop({
    type: Array<String>,
  })
  images: string[];
  @Prop({
    type: Array<mongoose.Schema.Types.ObjectId>,
  })
  link_category_id: Array<mongoose.Schema.Types.ObjectId>;
  @Prop({
    type: Date,
  })
  license_datetime: Date;
  @Prop({
    type: Number,
  })
  control_number: Number;
  @Prop({
    type: Date,
  })
  update_datetime: Date;

  @Prop({
    type: Address,
  })
  address: Address;

  @Prop({
    type: Coordinate,
  })
  coordinate: Coordinate;

  @Prop({
    type: OpeningHours,
  })
  opening_hours: OpeningHours;
}

export const PharmacySchema = SchemaFactory.createForClass(Pharmacy);
