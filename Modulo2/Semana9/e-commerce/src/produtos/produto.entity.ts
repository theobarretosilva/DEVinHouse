import { IsNotEmpty } from 'class-validator';

export class Produto {
  @IsNotEmpty({
    message: 'O nome é obrigatório!',
  })
  name: string;

  @IsNotEmpty({
    message: 'O preço do produto é obrigatório!',
  })
  price: number;

  @IsNotEmpty({
    message: 'A descrição do produto é obrigatória!',
  })
  description: string;

  available = true;

  @IsNotEmpty({
    message: 'A categoria do produto é obrigatória!',
  })
  category: string;
}
