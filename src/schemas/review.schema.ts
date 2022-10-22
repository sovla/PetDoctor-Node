import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ReviewDocument = Review & Document;

// 스키마 정의를 표시하는 데코레이터
@Schema()
export class Review {
  // @Prop 데코레이터는 문서의 속성을 정의함/ 타입은 암시적으로 유추하지만 @Prop([String]) 명시적으로 표시하는 것이 좋음
  //   @Prop({
  //     type: String, 타입지정
  //     required: true, 필수값
  //     ref: 'Owner' 관계 지정 owners 또는 Owner 컬렉션이 있어야함
  //   })
  //   name: string;

  @Prop({
    type: mongoose.Types.ObjectId,
  })
  link_id: mongoose.Types.ObjectId;
  @Prop({
    type: mongoose.Types.ObjectId,
  })
  write_id: mongoose.Types.ObjectId;
  @Prop({
    type: String,
  })
  title: string;
  @Prop({
    type: String,
  })
  content: string;
  @Prop({
    type: Date,
  })
  write_datetime: Date;
  @Prop({
    type: Date,
  })
  delete_datetime: Date;
  @Prop({
    type: Date,
  })
  updata_datetime: Date;

  @Prop({
    type: Array<String>,
  })
  images: Array<String>;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
