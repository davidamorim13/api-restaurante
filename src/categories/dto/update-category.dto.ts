import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsString, IsBoolean } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
	@IsString()
	name: string;
	@IsBoolean()
	active: boolean;
}
