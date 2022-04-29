import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// デコレータ: ＠がついているもの。デコレーションする。
// providersに設定したものは contorollersで使用できるようになる
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
