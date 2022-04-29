// memo: コントローラ: どんなurlが来たらどんなresponseをを返すかについて記述する
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //関数を定義したらそれがどういうメソッドか書く必要がある。
  // @Get()
  // getHello() {
  //   // ここに処理を書くのではなく service.ts に記述する
  //   // インスタンス生成
  //   const appService = new AppService();
  //   return appService.getHello();
  // }

  // DI: Dependences Injection (依存注入というデザインパターン)(毎回newしない方法)
  // module.tsで定義してればconstructorをかくことで使える
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
