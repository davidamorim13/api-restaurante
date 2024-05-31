import { IsString, IsBoolean } from 'class-validator';

export class CreateCategoryDto {
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

	@IsBoolean(
		{
			message: "O campo active deve ser um valo boolean."
		}
	)
	active: boolean;
}
