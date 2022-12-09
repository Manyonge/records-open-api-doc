import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  buyingPrice: number;
  @ApiProperty()
  restockDate: string;
  @ApiProperty()
  sellingPrice: number;
  @ApiProperty()
  sellingDate: string;
}
