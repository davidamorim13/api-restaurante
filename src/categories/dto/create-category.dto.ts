import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateCategoryDto {
	@IsNumber()
	id: number;

	@IsString(
		{
			message: "O campo name deve ser uma string."
		}
	)
	name: string;

	@IsBoolean(
		{
			message: "O campo active deve ser um valo boolean."
		}
	)
	active: boolean;
}
