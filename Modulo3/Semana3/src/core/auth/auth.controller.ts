import { Body, Controller, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';
import { UserLoginDTO } from 'src/users/dto/userLogin.dto';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'auth/signup',
    description:
      'Este endpoint recebe no Body os dados para o cadastro de usuários, retornando que a requisição foi um sucesso',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário cadastrado com sucesso!',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não deu certo, revise e tente novamente',
  })
  @ApiResponse({
    status: 409,
    description: 'Usuário já cadastrado!',
  })
  @Post('/signup')
  async signUp(@Body() userDTO: CreateUserDTO) {
    if (await this.authService.findOne(userDTO.email)) {
      throw new HttpException(
        { reason: 'Usuário já cadastrado!' },
        HttpStatus.CONFLICT,
      );
    } else {
      await this.authService.signUp(userDTO, userDTO.address);
      return {
        message: 'Usuário cadastrado com sucesso!',
      };
    }
  }

  @ApiOperation({
    summary: 'auth/signup',
    description:
      'Este endpoint recebe no Body o email e password, retornando que o login teve sucesso',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário logado com sucesso!',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não deu certo, revise e tente novamente',
  })
  @Post('/signin')
  async signIn(@Body() credentials: UserLoginDTO) {
    return await this.authService.signIn(credentials);
  }
}
