import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type:"postgres",
			host:"localhost",
			port:5432,
			username:"postgres",
			password: "1",
			database:"restaurante",
			entities:[__dirname + "/**/*.entity{.ts,.js}"]
		}),
		ProductsModule, 
		CategoriesModule, 
		CustomersModule
	],

	controllers: [AppController],

	providers: [AppService],
})
export class AppModule {}
