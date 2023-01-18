import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private userRepository: Repository<UserEntity>,
  ) {}

  async signUp(createUserDTO: CreateUserDTO) {
    return new Promise(async (resolve) => {
      const { name, user, email, photoUrl } = createUserDTO;
      const usuario = this.userRepository.create();
      usuario.name = name;
      usuario.user = user;
      usuario.email = email;
      usuario.photoUrl = photoUrl;
      const userCreated = this.userRepository.save(usuario);
      resolve(userCreated);
    });
  }
}
