// memo: エントリーポイント
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // nestのインスタンスを作成
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
