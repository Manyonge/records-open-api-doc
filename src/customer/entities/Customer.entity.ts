import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  contact: string;
}
