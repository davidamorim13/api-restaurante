import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

  @IsString()
  name: string

  @IsNumber()
  price: number

  @IsString()
  categoriId: string

  @IsBoolean()
  active: boolean
}
