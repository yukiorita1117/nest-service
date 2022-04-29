import { Injectable } from '@nestjs/common';

// Injectableのデコレータを追加することで controllerでインスタンス生成記述なしで呼べる
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
