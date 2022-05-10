import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // dataをlocal storageに入れてるだけ。再起動でdataは飛ぶ。
  users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}
