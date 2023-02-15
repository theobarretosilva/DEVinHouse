import {
  Body,
  Controller,
  Request,
  HttpStatus,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ChangePasswordDTO } from './dto/changePassword.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @ApiOperation({
    summary: 'users/changePassword',
    description:
      'Este endpoint recebe no header o Bearer token e no body os dados para a alteração da senha',
  })
  @ApiResponse({
    status: 200,
    description: 'Senha alterada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não deu certo, revise e tente novamente',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('/changePassword')
  async changePassword(@Request() request, @Body() body: ChangePasswordDTO) {
    try {
      const authorization = request.headers.authorization;
      const token = authorization.split('Bearer ');
      const payload = this.jwtService.decode(token[1]);
      await this.userService.changePassword(payload, body);
      return {
        message: 'Senha alterada com sucesso!',
      };
    } catch (error) {
      throw new HttpException(
        { reason: 'Alguma informação está incorreta, verifique novamente!' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @ApiOperation({
    summary: 'users/profile',
    description:
      'Este endpoint recebe no Header o Bearer token e retorna os dados do perfil do usuário',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário retornados com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não deu certo, revise e tente novamente',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  async getInfoUserProfile(@Request() request) {
    const authorization = request.headers.authorization;
    const token = authorization.split('Bearer ');
    const payload = this.jwtService.decode(token[1]);
    return await this.userService.getUserInfo(payload);
  }
}
