import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
	@IsString()
	name: string;

	@IsNumber()
	price: number;

	@IsNumber()
	categoriId: number;

	@IsBoolean()
	active: boolean;
}
