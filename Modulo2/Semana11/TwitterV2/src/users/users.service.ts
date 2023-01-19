import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDTO } from './dto/changPassword.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private userRepository: Repository<UserEntity>,
  ) {}

  async changePassword(userPayload: any, changePasswordDTO: ChangePasswordDTO) {
    return new Promise(async (resolve, reject) => {
      const { email, oldPassword, newPassword } = changePasswordDTO;

      const foundUser = await this.userRepository.findOne({
        where: {
          _id: userPayload.id,
        },
      });

      const hashPassword = await bcrypt.hash(newPassword, foundUser.salt);

      if (
        foundUser.email == email &&
        (await foundUser.checkPassword(oldPassword))
      ) {
        const changePassword = await this.userRepository.update(
          {
            _id: userPayload.id,
          },
          {
            password: hashPassword,
          },
        );
        resolve(changePassword);
      } else if (
        foundUser.email != email ||
        !(await foundUser.checkPassword(oldPassword))
      ) {
        reject('Algo não foi preenchido corretamente!');
      }
    });
  }
}
