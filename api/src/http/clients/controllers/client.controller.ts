import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import {
  CreateClientDto,
  UpdateClientDto,
} from '../../../core/models/dto/client.dto';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'Número da página',
    example: 1,
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'Número de resultados por página',
    example: 10,
    required: false,
  })
  @ApiQuery({
    name: 'filterByName',
    type: String,
    description: 'Filtro para clientes por nome',
    example: '',
    required: false,
  })
  async findAll(
    @Query('filterByName') filterByName: string = '',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.clientService.findAll(page, limit, filterByName);
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: 'string',
    example: '1',
    description: 'id do cliente',
  })
  async findOne(@Param('id') id: string) {
    return await this.clientService.findOne(id);
  }

  @Post('')
  async create(@Body() data: CreateClientDto) {
    return await this.clientService.create(data);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    example: '1',
    description: 'id do cliente',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.clientService.delete(id);
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    example: '1',
    description: 'id do cliente',
  })
  @Patch('/:id')
  async update(@Body() data: UpdateClientDto, @Param('id') id: string) {
    return await this.clientService.update(id, data);
  }
}
