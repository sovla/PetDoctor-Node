import { UserSchema } from './schemas/user.schema';
import { Controller, Get, Request } from '@nestjs/common';
import Crawler from 'crawler';
import { AppService } from './app.service';
import { Request as ExpressRequest, Router } from 'express';
import { json } from 'stream/consumers';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger/dist';

@Controller()
@ApiTags('테스트용 Swagger')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
  getHello(@Request() req: ExpressRequest): string {
    const c = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback: function (error, res, done) {
        if (error) {
          console.log(error);
        } else {
          const $ = res.$;
          // $ is Cheerio by default
          //a lean implementation of core jQuery designed specifically for the server
          console.log($('_pcmap_list_scroll_container').children());

          /***************************************************
              이부분에서 jQuery를 이용해 데이터를 파싱하고 출력할 것입니다.
              ****************************************************/
        }
        done();
      },
    });
    c.queue(
      'https://map.naver.com/v5/search/%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90',
    );

    const router = req.app._router as Router;
    return JSON.stringify({
      routes: router.stack
        .map((layer) => {
          if (layer.route) {
            const path = layer.route?.path;
            const method = layer.route?.stack[0].method;
            return `${method.toUpperCase()} ${path}`;
          }
        })
        .filter((item) => item !== undefined),
    });
    return this.appService.getHello();
  }
}
