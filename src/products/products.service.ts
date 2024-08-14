import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(ProductEntity)
		private repository: Repository<ProductEntity>
	){}
	
	create(createProductDto: CreateProductDto) {
		return this.repository.save(createProductDto);
		
	}

	findAll() {
		return this.repository.find()
	}

	findOne(id: number) {
		return this.repository.findOneBy({id})
	}
	update(id: number, updateProductDto: UpdateProductDto) {
		return this.repository.update(id, updateProductDto)
	}

	remove(id: number) {
		this.repository.delete(id)
	}
}
