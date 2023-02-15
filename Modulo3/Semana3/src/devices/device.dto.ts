import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class DeviceDTO {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Você deve definir o id do dispositivo para vinculação!',
  })
  _id: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O nome do dispositivo é obrigatório!' })
  @IsString({ message: 'O nome do dispositivo deve ser uma string!' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O tipo do dispositivo é obrigatório!' })
  @IsString({ message: 'O tipo do dispositivo deve ser uma string!' })
  type: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O fabricante do dispositivo é obrigatório!' })
  @IsString({ message: 'O fabricante do dispositivo deve ser uma string!' })
  madeBy: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Ligado ou desligado é obrigatório!' })
  @IsBoolean({ message: 'Ligado ou desligado deve ser um boolean' })
  isOn: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'A informação do dispositivo é obrigatório!' })
  @IsString({ message: 'A informação do dispositivo deve ser uma string!' })
  info: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O endereço IP do dispositivo é obrigatório!' })
  @IsString({ message: 'O endereço IP do dispositivo deve ser uma string!' })
  ipAddress: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O endereço MAC do dispositivo é obrigatório!' })
  @IsString({ message: 'O endereço MAC do dispositivo deve ser uma string!' })
  macAddress: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O local do dispositivo é obrigatório!' })
  @IsString({ message: 'O local do dispositivo deve ser uma string!' })
  local: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O agrupamento do dispositivo é obrigatório!' })
  @IsString({ message: 'O agrupamento do dispositivo deve ser uma string!' })
  grouping: string;
}
