import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];

  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}
