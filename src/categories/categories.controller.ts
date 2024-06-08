import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('categories')

@Controller('categories')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Post()
	@ApiResponse({status:201, description:"A categoria foi cadastrada com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao cadastrar."})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoriesService.create(createCategoryDto);
	}

	@Get()
	@ApiResponse({status:200, description:"Leitura com sucesso."})
	@ApiResponse({status:404, description: "Categoria não encontrada"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findAll() {
		return this.categoriesService.findAll();
	}

	@Get(':id')
	@ApiResponse({status:200, description:"Categoria encontrada com sucesso."})
	@ApiResponse({status:404, description: "Categoria não encontrada"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	findOne(@Param('id') id: string) {
		return this.categoriesService.findOne(+id);
	}

	@Patch(':id')
	@ApiResponse({status:200, description:"Categoria atualizada com sucesso."})
	@ApiResponse({status:400, description: "O correu um erro ao atualizar a categoria."})
	@ApiResponse({status:404, description: "Categoria não encontrado"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	update(
		@Param('id') id: string,
		@Body() updateCategoryDto: UpdateCategoryDto,
	) {
		return this.categoriesService.update(+id, updateCategoryDto);
	}

	@Delete(':id')
	@ApiResponse({status:200, description:"Categoria excluida com sucesso."})
	@ApiResponse({status:404, description: "Categoria não encontrada"})
	@ApiResponse({status:500, description: "Ocorreu um erro interno no servidor."})
	remove(@Param('id') id: string) {
		return this.categoriesService.remove(+id);
	}
}
