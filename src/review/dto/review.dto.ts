import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Report } from 'src/schemas/review.schema';

export class CreateReviewDto {
  @ApiProperty()
  link_id: mongoose.Types.ObjectId;
  @ApiProperty()
  write_id: mongoose.Types.ObjectId;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
}

export class ListReviewDto {
  @ApiProperty()
  page: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  category_id: mongoose.Types.ObjectId;
  @ApiProperty()
  pharmacy_id: mongoose.Types.ObjectId;
  @ApiProperty()
  hospital_id: mongoose.Types.ObjectId;
}

export class DeleteReviewDto {
  @ApiProperty()
  id: mongoose.Types.ObjectId;
}

export class ReportDto {
  @ApiProperty()
  report: Report;
}
