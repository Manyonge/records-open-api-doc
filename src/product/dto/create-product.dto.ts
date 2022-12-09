import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  buyingPrice: number;
  @ApiProperty()
  restockDate: string;
  @ApiProperty()
  sellingPrice: number;
}
