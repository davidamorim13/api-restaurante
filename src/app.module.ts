import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CustomersModule } from './customers/customers.module';

@Module({
	imports: [ProductsModule, CategoriesModule, CustomersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
