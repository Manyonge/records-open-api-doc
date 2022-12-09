import { ApiProperty } from '@nestjs/swagger';

export class Delivery {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  productName: string;
  @ApiProperty()
  customerContact: string;
  @ApiProperty()
  deliveryMethod: string;
  @ApiProperty()
  status: string;
}
