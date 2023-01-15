import { HttpStatus } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common/decorators';
import { response } from 'express';
import { FindProdutoDTO } from './dto/findProduto.dto';
import { ProdutoDTO } from './dto/produto.dto';
import { ProdutoEntity } from './produto.entity';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutosService) {}

  @Post()
  async insert(@Body() produto: ProdutoDTO): Promise<ProdutoEntity> {
    return await this.produtoService.insert(produto);
  }

  @Get()
  async findAll() {
    return await this.produtoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') params) {
    const produtoExiste = await this.produtoService.findOne(params);
    if (produtoExiste) {
      return produtoExiste;
    } else {
      return {
        message: 'Produto não encontrado!',
      };
    }
  }

  @Get('/findByCategory/:category')
  async findByCategory(@Param('category') category) {
    const foundProduct = await this.produtoService.findByCategory(category);
    if (foundProduct) {
      return foundProduct;
    } else {
      return {
        message: 'Produto não encontrado!',
      };
    }
  }
}
