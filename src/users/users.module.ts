import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  // exportsできるものは providersに書いているものだけ。
  exports: [UsersService],
})
export class UsersModule {}
