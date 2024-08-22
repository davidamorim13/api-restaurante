import { IsString, IsBoolean, IsNumber, IsNumberString } from 'class-validator';

export class CreateCategoryDto {
	@IsNumberString()
	id: number;

	@IsString(
		{
			message: "O campo name deve ser uma string."
		}
	)
	name: string;

	@IsString(
		{
				message: "O campo da descrição deve ser uma string."
			}
	  )
	  description: string;

	@IsBoolean(
		{
			message: "O campo active deve ser um valo boolean."
		}
	)
	active: boolean;
}
