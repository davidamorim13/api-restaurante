import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
	@IsNumber()
	id: number;

	@IsString(
		{
			message: "O campo name deve ser uma string."
		}
	)
	name: string;

	@IsNumber()
	price: number;

	@IsNumber()
	categoriId: number;
	
	@IsBoolean(
		{
			message: "O campo active deve receber um valor do tipo boolean."
		}
	)
	active: boolean;
}
