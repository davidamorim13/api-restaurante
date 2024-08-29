import { IsBoolean, IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateProductDto {
	@IsNumberString()
	id: number;

	@IsString(
		{
			message: "O campo name deve ser uma string."
		}
	)
	name: string;

	@IsNumberString()
	price: number;

	@IsNumberString()
	categoriid: number;
	
	@IsBoolean(
		{
			message: "O campo active deve receber um valor do tipo boolean."
		}
	)
	active: boolean;
}
