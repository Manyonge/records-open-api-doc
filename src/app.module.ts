import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [ProductModule, CustomerModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
