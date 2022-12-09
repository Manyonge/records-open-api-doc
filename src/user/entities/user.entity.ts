import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  email: string;
}
