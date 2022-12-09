import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliveryDto {
  @ApiProperty()
  productName: string;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  saleDate: string;
  @ApiProperty()
  sellingPrice: number;
  @ApiProperty()
  customerContact: string;
}
