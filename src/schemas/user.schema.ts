import { ServerVariableObject } from './../../node_modules/@nestjs/swagger/dist/interfaces/open-api-spec.interface.d';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Address } from './hospital.schema';

export type UserDocument = User & Document;

// 스키마 정의를 표시하는 데코레이터
@Schema()
export class User {
  // @Prop 데코레이터는 문서의 속성을 정의함/ 타입은 암시적으로 유추하지만 @Prop([String]) 명시적으로 표시하는 것이 좋음
  //   @Prop({
  //     type: String, 타입지정
  //     required: true, 필수값
  //     ref: 'Owner' 관계 지정 owners 또는 Owner 컬렉션이 있어야함
  //   })
  //   name: string;

  @Prop()
  nickname: string;
  @Prop()
  introduction: string;
  @Prop()
  animal_type: string;
  @Prop({
    type: Address,
  })
  address: Address;
  @Prop()
  profile_image: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  location: string;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  recent_hospital: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  recent_pharmacy: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  recent_review: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  like_hospital: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  like_pharmacy: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  like_review: Array<mongoose.Types.ObjectId>;

  @Prop({
    type: Array<mongoose.Types.ObjectId>,
  })
  like_reply: Array<mongoose.Types.ObjectId>;
}

export const UserSchema = SchemaFactory.createForClass(User);
