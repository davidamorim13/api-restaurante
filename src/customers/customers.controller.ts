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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')

@Controller('customers')
export class CustomersController {
	constructor(private readonly customersService: CustomersService) {}

	@Post()
	@ApiResponse({status:201, description:"Cliente cadastrado com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao cadastrar um produto."})
	@ApiResponse({status:404, description: "Cliente não encontrado."})
	@ApiResponse({status:500, description: "O correu um erro interno no servidor."})
	create(@Body() createCustomerDto: CreateCustomerDto) {
		return this.customersService.create(createCustomerDto);
	}

	@Get()
	@ApiResponse({status:200, description:"Leitura com sucesso."})
	@ApiResponse({status:404, description: "Cliente não encontrada"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findAll() {
		return this.customersService.findAll();
	}

	@Get(':id')
	@ApiResponse({status:200, description:"Cliente encontrado com sucesso."})
	@ApiResponse({status:404, description: "Cliente não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findOne(@Param('id') id: string) {
		return this.customersService.findOne(+id);
	}

	@Patch(':id')
	@ApiResponse({status:200, description:"Cadastro do cliente atualizado com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao atualizar o cadastro do cliente."})
	@ApiResponse({status:404, description: "Cliente não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	update(
		@Param('id') id: string,
		@Body() updateCustomerDto: UpdateCustomerDto,
	) {
		return this.customersService.update(+id, updateCustomerDto);
	}

	@Delete(':id')
	@ApiResponse({status:200, description:"Cadastro de cliente excluido com sucesso."})
	@ApiResponse({status:404, description: "Cliente não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	remove(@Param('id') id: string) {
		return this.customersService.remove(+id);
	}
}
