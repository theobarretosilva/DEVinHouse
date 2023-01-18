import { UsersService } from './users.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signUp')
  async signUp(@Body() createUserDTO: CreateUserDTO) {
    return await this.userService.signUp(createUserDTO);
  }
}
