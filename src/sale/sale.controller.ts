import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Sale } from './entities';
@ApiTags('Sale')
@Controller('sales')
export class SaleController {
  @ApiOperation({ summary: 'find all sales' })
  @ApiOkResponse({ description: 'success', type: [Sale] })
  @Get()
  findAllSales() {
    return;
  }
  @ApiOperation({ summary: 'find one sale' })
  @Get(':saleId')
  findOneSale() {
    return;
  }
}
