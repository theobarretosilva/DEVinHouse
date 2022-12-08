import { Injectable } from '@nestjs/common';
import { carrinhosDatabase } from './carrinhos.database';

@Injectable()
export class CarrinhosService {
  constructor(private database: carrinhosDatabase) {}
}
