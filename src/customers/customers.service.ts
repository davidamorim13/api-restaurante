import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {

	constructor(
		@InjectRepository(CustomerEntity)
		private repository: Repository<CustomerEntity>
	){}

	create(createCustomerDto: CreateCustomerDto) {
		return this.repository.save(createCustomerDto);
	}

	findAll() {
		return this.repository.find()
	}

	findOne(id: number) {
		return this.repository.findOneBy({id})
	}

	update(id: number, updateCustomerDto: UpdateCustomerDto) {
		return this.repository.update(id, updateCustomerDto)
	}

	remove(id: number) {
		this.repository.delete(id)
	}
}
