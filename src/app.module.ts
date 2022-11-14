import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { SaleModule } from './sale/sale.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [ProductModule, CustomerModule, SaleModule, DeliveryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
