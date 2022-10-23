import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from 'src/schemas/review.schema';
import {
  CreateReviewDto,
  DeleteReviewDto,
  ListReviewDto,
  ReportDto,
} from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    return this.reviewModel.create({
      link_id: createReviewDto.link_id,
      write_id: createReviewDto.write_id,
      title: createReviewDto.title,
      content: createReviewDto.content,
      write_datetime: Date.now(),
    });
  }

  findList(dto: ListReviewDto) {
    return this.reviewModel
      .find({})
      .sort({
        write_datetime: 'desc',
      })
      .limit(dto.limit)
      .skip((dto.page - 1) * dto.limit);
  }

  findOne(id: number) {
    return this.reviewModel.findOne({ _id: id }).populate('');
  }

  update(updateReviewDto: ReviewDocument) {
    return `This action updates a # review`;
  }

  remove(deleteReviewDto: DeleteReviewDto) {
    return `This action removes a w`;
  }

  report(reportDto: ReportDto) {
    return;
  }
}
