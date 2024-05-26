import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
	@IsString()
	id: string;

	@IsString()
	name: string;

	@IsNumber()
	price: number;

	@IsString()
	categoriId: string;

	@IsBoolean()
	active: boolean;
}
