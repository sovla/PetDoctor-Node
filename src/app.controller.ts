import { Controller, Get } from '@nestjs/common';
import Crawler from 'crawler';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
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
    return this.appService.getHello();
  }
}
