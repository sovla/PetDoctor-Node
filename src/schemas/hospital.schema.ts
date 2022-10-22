import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document, Number } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';
import { Category } from './category.schema';

export type HospitalDocument = Hospital & Document;

export class Address extends Object {
  //주소
  @ApiProperty({
    title: '우편번호',
    format: '00000~99999 5자리 숫자',
  })
  postcode: string;
  @ApiProperty({
    title: '주소',
    format: '상세 주소 제외 주소',
  })
  address: string;
  @ApiProperty({
    title: '상세주소',
    format: '동/호수',
  })
  detail_address: string;
}

export class Coordinate extends Object {
  //위도경도
  @ApiProperty({
    title: '위도',
    format: '131.000000 / 소숫점 6자리까지',
  })
  latitude: number;
  @ApiProperty({
    title: '경도',
    format: '131.000000 / 소숫점 6자리까지',
  })
  longitude: number;
}

export class OpeningHours extends Object {
  @ApiProperty({
    title: '영업시간/월요일',
  })
  mon: schedule;
  tue: schedule;
  web: schedule;
  thu: schedule;
  fri: schedule;
  sat: schedule;

  sun: schedule;
  holy_day: schedule;
}

type days =
  | '월요일'
  | '화요일'
  | '수요일'
  | '목요일'
  | '금요일'
  | '토요일'
  | '일요일';

type schedule = {
  type: days;
  startTime: String;
  endTime: String;
  description: String;
  isDayOff: Boolean;
};

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

  @ApiProperty({
    title: '병원이름',
  })
  @Prop({
    type: String,
  })
  name: string;

  @ApiProperty({
    title: '전화번호',
    format: '010-1234-1234',
  })
  @Prop({
    type: String,
  })
  phone: string;
  @ApiProperty({
    title: '홈페이지',
    format: 'http://xxx.com/co.kr/net...',
  })
  @Prop({
    type: String,
  })
  homepage: string;
  @ApiProperty({
    title: '영업여부',
    format: '폐업/영업정상',
  })
  @Prop({
    type: String,
  })
  business_status: string;

  @ApiProperty({
    title: '썸네일이미지',
  })
  @Prop({
    type: Array<String>,
  })
  images: string[];

  @ApiProperty({
    title: '카테고리 ID',
  })
  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
      },
    ],
  })
  link_category_id: Category[];

  @ApiProperty({
    title: '인허가 날짜',
    format: '2022-06-13',
  })
  @Prop({
    type: Date,
  })
  license_datetime: Date;

  @ApiProperty({
    title: '관리번호(엑셀)',
  })
  @Prop({
    type: Number,
  })
  control_number: Number;

  @ApiProperty({
    title: '정보 업데이트 날짜',
    format: '2022-09-16 10:23:30',
  })
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

  @ApiProperty({
    title: '정보 제거 날짜',
    format: '2022-09-16 10:23:30',
  })
  @Prop({
    type: Date,
  })
  delete_date: Date;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
