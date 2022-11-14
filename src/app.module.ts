import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
