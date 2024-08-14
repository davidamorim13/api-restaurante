import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("products")

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Post()
	@ApiResponse({status:201, description:"Produto  cadastrado com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao cadastrar um produto."})
	@ApiResponse({status:404, description: "Produto não encontrado."})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	create(@Body() createProductDto: CreateProductDto) {
		return this.productsService.create(createProductDto);
	}

	@Get()
	@ApiResponse({status:200, description:"Leitura com sucesso."})
	@ApiResponse({status:404, description: "Produto não encontrada"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findAll() {
		return this.productsService.findAll();
	}

	@Get(':id')
	@ApiResponse({status:200, description:"Produto encontrado com sucesso."})
	@ApiResponse({status:404, description: "Produto não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findOne(@Param('id') id: string) {
		return this.productsService.findOne(+id);
	}

	@Patch(':id')
	@ApiResponse({status:200, description:"Produto atualizado com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao atualizar o produto."})
	@ApiResponse({status:404, description: "Produto não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
		return this.productsService.update(+id, updateProductDto);
	}

	@Delete(':id')
	@ApiResponse({status:200, description:"Produto excluido com sucesso."})
	@ApiResponse({status:404, description: "Produto não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	remove(@Param('id') id: string) {
		return this.productsService.remove(+id);
	}
}
