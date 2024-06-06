import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')

@Controller('customers')
export class CustomersController {
	constructor(private readonly customersService: CustomersService) {}

	@Post()
	@ApiResponse({status:201, description:"O produto foi criado com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao cadastrar um produto."})
	@ApiResponse({status:404, description: "Produto não encontrado."})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	create(@Body() createCustomerDto: CreateCustomerDto) {
		return this.customersService.create(createCustomerDto);
	}

	@Get()
	findAll() {
		return this.customersService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.customersService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateCustomerDto: UpdateCustomerDto,
	) {
		return this.customersService.update(+id, updateCustomerDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.customersService.remove(+id);
	}
}
