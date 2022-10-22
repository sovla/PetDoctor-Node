import { Hospital } from './../hospital/schemas/hospital.schema';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    title: '닉네임',
    minimum: 0,
    maximum: 20,
    format: '한글/영어/숫자 20자이내',
  })
  @Prop()
  nickname: string;

  @ApiProperty({
    title: '소개글',
    minimum: 0,
    maximum: 100,
    format: '한글/영어/숫자 100자이내',
  })
  @Prop()
  introduction: string;

  @ApiProperty({
    title: '동물분류',
    minimum: 0,
    maximum: 10,
    format: '강아지/고양이 등등 스트링으로 만 처리',
  })
  @Prop({
    min: 0,
    max: 10,
    type: String,
    default: '',
  })
  animal_type: string;

  @ApiProperty({
    title: '주소',
    format: '강아지/고양이 등등 스트링으로 만 처리',
  })
  @Prop({
    type: Address,
  })
  address: Address;

  @ApiProperty({
    title: '프로필 이미지',
  })
  @Prop({
    type: String,
  })
  profile_image: string;

  @ApiProperty({
    title: '이메일',
    format: '이메일 형식',
  })
  @Prop()
  email: string;

  @ApiProperty({
    title: '패스워드',
    minLength: 6,
    maximum: 20,
    format: '아무문자 6~20자',
  })
  @Prop()
  password: string;
  @ApiProperty({
    title: '위치(수정필요)',
  })
  @Prop()
  location: string;

  @ApiProperty({
    title: '최근 본 병원 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  })
  recent_hospital: Hospital[];

  @ApiProperty({
    title: '최근 본 약국 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Pharmacy',
      },
    ],
  })
  recent_pharmacy: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '최근 본 리뷰 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Review',
      },
    ],
  })
  recent_review: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '좋아요한 병원 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  })
  like_hospital: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '좋아요한 약국 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Pharmacy',
      },
    ],
  })
  like_pharmacy: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '좋아요한 리뷰 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Review',
      },
    ],
  })
  like_review: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '좋아요한 댓글 리스트',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Reply',
      },
    ],
  })
  like_reply: Array<mongoose.Types.ObjectId>;

  @ApiProperty({
    title: '탈퇴일',
  })
  @Prop({
    type: Date,
  })
  delete_date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
