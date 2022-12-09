import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty()
  productName: string;
  @ApiProperty()
  productId: string;
  @ApiProperty()
  customerContact: string;
  @ApiProperty()
  deliveryMethod: string;
  @ApiProperty()
  status: string;
}
