import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessException } from '../../../core/exception/business-exception';
import {
  CreateClientDto,
  UpdateClientDto,
} from 'src/core/models/dto/client.dto';
import { ClientEntity } from '../../../core/models/entities/client.entity';
import { ILike, Repository, FindOperator } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    filterByName?: string,
  ): Promise<{ clients: ClientEntity[]; count: number }> {
    const where: { active: boolean; name?: string | FindOperator<string> } = {
      active: true,
    };

    if (filterByName && filterByName.trim() !== '') {
      where.name = ILike(`%${filterByName.trim()}%`);
    }

    const [clients, count] = await this.clientRepository.findAndCount({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });

    return { clients, count };
  }

  async findOne(id: string): Promise<ClientEntity> {
    const findedClient = await this.clientRepository.findOne({
      where: { id: id, active: true },
    });

    if (!findedClient) {
      throw new BusinessException('Cliente não encontrado', undefined, 404);
    }

    return findedClient;
  }

  async create(data: CreateClientDto): Promise<ClientEntity> {
    return await this.clientRepository.save(data);
  }

  async update(id: string, data: UpdateClientDto) {
    await this.findOne(id);
    await this.clientRepository.update({ id }, data);
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new BusinessException('Cliente não encontrado', undefined, 404);
    }
    return client;
  }

  async delete(id: string): Promise<ClientEntity> {
    await this.clientRepository.update(
      {
        id,
      },
      {
        active: false,
      },
    );

    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new BusinessException('Cliente não encontrado', undefined, 404);
    }
    return client;
  }
}
