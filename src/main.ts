import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from 'src/util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();

// TODO 유저


// TODO 유저 로그인
// TODO 유저 차단



// TODO 리뷰

// TODO 실시간 리뷰 리스트 각 카테고리별 - 최신순 5개
// TODO 리뷰 작성
// TODO 리뷰 리스팅 - 카테고리 기준, 10개씩
// TODO 리뷰 상세보기
// TODO 리뷰 삭제
// TODO 리뷰 수정
// TODO 리뷰 신고

// TODO 댓글
// TODO 댓글 작성
// TODO 댓글 리스팅 - 리뷰 기준 전부다 불러오기
// TODO 댓글 수정
// TODO 댓글 삭제
// TODO 댓글 신고
// TODO 좋아요


// TODO 병원,약국
// TODO 리스팅 - 10개씩
// TODO 좋아요

