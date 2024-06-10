import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
	@IsString(
		{
			message: "O campo id deve ser uma string."
		}
	)
	id: string;

	@IsString(
		{
			message: "O campo name deve ser uma string."
		}
	)
	name: string;

	@IsNumber()
	price: number;

	@IsString(
		{
			message: "O campo categoriId deve ser uma string."
		}
	)
	categoriId: string;
	
	@IsBoolean(
		{
			message: "O campo active deve receber um valor do tipo boolean."
		}
	)
	active: boolean;
}
