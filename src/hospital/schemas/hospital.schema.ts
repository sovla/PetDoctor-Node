import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type HospitalDocument = Hospital & Document;

// 스키마 정의를 표시하는 데코레이터
@Schema()
export class Hospital {
  // @Prop 데코레이터는 문서의 속성을 정의함/ 타입은 암시적으로 유추하지만 @Prop([String]) 명시적으로 표시하는 것이 좋음
  //   @Prop({
  //     type: String, 타입지정
  //     required: true, 필수값
  //     ref: 'Owner' 관계 지정 owners 또는 Owner 컬렉션이 있어야함
  //   })
  //   name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] })
  owner: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  realOwner: User;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
