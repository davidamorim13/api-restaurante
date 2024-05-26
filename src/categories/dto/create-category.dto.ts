import { IsString, IsBoolean } from 'class-validator';

export class CreateCategoryDto {
	@IsString()
	id: string;

	@IsString()
	name: string;

	@IsBoolean()
	active: boolean;
}
