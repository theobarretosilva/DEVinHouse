import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/createUser.dto';
import { UserLoginDTO } from 'src/users/dto/userLogin.dto';
import { UserEntity } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async signUp(userDTO: CreateUserDTO) {
    const { photoUrl, email, password, name, user } = userDTO;

    const createUser = await this.userRepository.create();
    createUser.name = name;
    createUser.user = user;
    createUser.salt = await bcrypt.genSalt();
    createUser.photoUrl = photoUrl;
    createUser.email = email;
    createUser.password = await this.hashpassword(password, createUser.salt);
    const userCreated = await this.userRepository.save(createUser);

    const jwtPayload = {
      id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
    };
    const token = this.jwtService.sign(jwtPayload);
    return { token };
  }

  async signIn(credentials: UserLoginDTO) {
    const user = await this.checkCredentials(credentials);
    if (user === null) {
      throw new UnauthorizedException('Email e/ou senha incorretos.');
    }

    const jwtPayload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = this.jwtService.sign(jwtPayload);
    return { token };
  }

  async checkCredentials(credentials: UserLoginDTO) {
    const { email, password } = credentials;
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (user && (await user.checkPassword(password))) {
      return user;
    }
    return null;
  }

  validateToken(jwtToken: string) {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(
          this.jwtService.verifyAsync(jwtToken, {
            ignoreExpiration: false,
          }),
        );
      } catch (error) {
        reject({
          code: 401,
          detail: 'Token expirado!',
        });
      }
    });
  }

  async findOne(email: string) {
    const userExists = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    return userExists;
  }

  private async hashpassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
