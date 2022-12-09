import { ApiProperty } from '@nestjs/swagger';

export class Sale {
  @ApiProperty({ type: String, example: 'Air jordan 1' })
  productName: string;
  @ApiProperty({ type: String, example: 'diuyeriuh' })
  productId: string;
  @ApiProperty({ type: String, example: '2022-11-01' })
  saleDate: string;
  @ApiProperty({ type: Number, example: '15000' })
  sellingPrice: number;
  @ApiProperty({ type: String, example: 'dripventory' })
  customerInstagramHandle: string;
  @ApiProperty({ type: String, example: 'dfadfjdakh' })
  createdAt: string;
  @ApiProperty({ type: String, example: 'efadfdfiouyh' })
  updateAt: string;
}
