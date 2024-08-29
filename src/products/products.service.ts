import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { skip } from 'node:test';

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

		const page = 0
		const intens_per_pagina = 1;

		const pagination = {
			skip: 1,
			take: 2
		}


		return this.repository.find( {...pagination, order: {id: 'ASC'}} )
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
