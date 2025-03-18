import { Module } from '@nestjs/common';
import { ClientService } from './services/client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/core/models/entities/client.entity';
import { ClientController } from './controllers/client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
