import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
	
	constructor(
		@InjectRepository(CategoryEntity)
		private repository: Repository<CategoryEntity>
	){}
	
	create(createCategoryDto: CreateCategoryDto) {
		return this.repository.save(createCategoryDto);
	}

	findAll() {
		return this.repository.find()
		
	}
	findOne(id: number) {
		return this.repository.findOneBy({id})
	}

	update(id: number, updateCategoryDto: UpdateCategoryDto) {
		return this.repository.update(id, updateCategoryDto)
	
	}

	remove(id: number) {
		this.repository.delete(id);
	}
}
