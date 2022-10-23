import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import {
  CreateReviewDto,
  DeleteReviewDto,
  ListReviewDto,
  ReportDto,
} from './dto/review.dto';
import { Review, ReviewDocument } from 'src/schemas/review.schema';
import { ApiOperation } from '@nestjs/swagger';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findList(@Query() listReviewDto: ListReviewDto) {
    return this.reviewService.findList(listReviewDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(+id);
  }

  @Patch()
  @ApiOperation({
    summary: 'Review 정보 업데이트',
    requestBody: {
      content: {
        Review: {
          schema: {
            $ref: '#/components/schemas/Review',
          },
        },
      },
    },
  })
  update(@Body() updateReviewDto: ReviewDocument) {
    return this.reviewService.update(updateReviewDto);
  }

  @Delete()
  remove(@Param() deleteReviewDto: DeleteReviewDto) {
    return this.reviewService.remove(deleteReviewDto);
  }

  @Post('/report')
  reportReview(@Body() reportDto: ReportDto) {
    return this.reviewService.report(reportDto);
  }
}
