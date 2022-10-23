import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, mongo } from 'mongoose';

export type ReviewDocument = Review & Document;

export class Report {
  @ApiProperty({
    title: '작성자 id',
  })
  @Prop({ type: mongoose.Types.ObjectId })
  write_id: mongoose.Types.ObjectId;
  @ApiProperty({
    title: '작성자 이름',
  })
  @Prop({ type: String })
  write_name: string;
  @ApiProperty({
    title: '신고사유',
    minimum: 0,
    maximum: 1000,
  })
  @Prop({ type: String })
  report_content: string;
  @ApiProperty({
    title: '작성 날짜',
    format: '2022.10.10 10:10:10',
  })
  @Prop({ type: String })
  report_date: string;
  @ApiProperty({
    title: '처리 상태',
    description:
      '0:신고 접수,1:신고 확인,10:신고 처리 완료,20:사유 불충분 신고 해제',
  })
  @Prop({ type: Number })
  step: number;
}

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
  @ApiProperty({
    title: '병원/약국/카테고리 번호 중 하나',
  })
  @Prop({
    type: mongoose.Types.ObjectId,
  })
  link_id: mongoose.Types.ObjectId;
  @ApiProperty({
    title: '작성자 _id',
  })
  @Prop({
    type: mongoose.Types.ObjectId,
  })
  write_id: mongoose.Types.ObjectId;
  @ApiProperty({
    title: '제목',
    minimum: 0,
    maximum: 100,
  })
  @Prop({
    type: String,
  })
  title: string;
  @ApiProperty({
    title: '내용',
    minimum: 0,
    maximum: 500,
  })
  @Prop({
    type: String,
  })
  content: string;
  @ApiProperty({
    title: '작성 날짜',
    format: '2022.10.10 10:10:10',
  })
  @Prop({
    type: Date,
  })
  write_datetime: Date;
  @ApiProperty({
    title: '제거 날짜',
    format: '2022.10.10 10:10:10',
  })
  @Prop({
    type: Date,
  })
  delete_datetime: Date;
  @ApiProperty({
    title: '수정 날짜',
    format: '2022.10.10 10:10:10',
  })
  @Prop({
    type: Date,
  })
  updata_datetime: Date;
  @ApiProperty({
    title: '이미지 배열',
  })
  @Prop({
    type: Array<String>,
  })
  images: Array<String>;

  @Prop({
    type: Report,
  })
  report: Report;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
