import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
	create(createCustomerDto: CreateCustomerDto) {
		return 'This action adds a new customer';
	}

	findAll() {
		return [{
		id: 1,
		name: 'lasanha',
		email: 'massas@gmail.com',
		pasword: 132456,
		active: true,
		}]
	}

	findOne(id: number) {
		return [{
		id: 1,
		name: 'lasanha',
		email: 'massas@gmail.com',
		pasword: 132456,
		active: true,
		}]
	}

	update(id: number, updateCustomerDto: UpdateCustomerDto) {
		return [{
			id: 1,
			name: 'lasanha',
			email: 'massas@gmail.com',
			pasword: 132456,
			active: true,
		}]
		
			
		
	}

	remove(id: number) {
		return `This action removes a #${id} product`;
	}
}
