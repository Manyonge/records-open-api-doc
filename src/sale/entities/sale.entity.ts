import { ApiProperty } from '@nestjs/swagger';

export class Sale {
  @ApiProperty()
  _id?: string;
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
