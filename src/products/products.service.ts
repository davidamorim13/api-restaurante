import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
	create(createProductDto: CreateProductDto) {
		return 'This action adds a new create';
	}

	findAll() {
		return [{
		id: 1,
		name: 'lasanha',
		price: 10,
		categoriId: 1,
		active: true,
		}]
	}

	findOne(id: number) {
		return [{id:1,
			name: 'lasanha',
			price: 10,
			categoriId: 1,
			active: true, 
		}]
	}
	update(id: number, updateProductDto: UpdateProductDto) {
		return [{
		id:1,
		name: 'lasanha',
		price: 10,
		categoriId: 1,
		active: true, 
		}]
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}
}
