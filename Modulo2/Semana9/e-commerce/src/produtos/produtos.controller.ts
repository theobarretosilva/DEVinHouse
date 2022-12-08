import { Controller } from '@nestjs/common/decorators';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private service: ProdutosService) {}
}
