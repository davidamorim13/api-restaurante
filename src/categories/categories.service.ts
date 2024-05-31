import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
	create(createCategoryDto: CreateCategoryDto) {
		return 'This action adds a new category';
	}

	findAll() {
		return [{
			id: '1',
			name: 'Massas',
			active: true,
		}]
		
	}
	findOne(id: number) {
		return [{
			id: 1,
			name: 'Massas',
			active: true,
		}]
	}

	update(id: number, updateCategoryDto: UpdateCategoryDto) {
		return [{
			name: 'Massas',
		active: true,
		}]
	
	}

	remove(id: number) {
		return `This action removes a #${id} category`;
	}
}
