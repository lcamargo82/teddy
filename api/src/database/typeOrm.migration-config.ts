import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ClientEntity } from '../core/models/entities/client.entity';

config();

const configService = new ConfigService();

const dbPort = configService.get<string>('DB_PORT');
const parsedPort = dbPort ? parseInt(dbPort, 10) : 5432;

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: parsedPort,
  username: configService.get<string>('DB_USERNAME') || 'postgres',
  password: configService.get<string>('DB_PASSWORD') || '',
  database: configService.get<string>('DB_NAME') || '',
  entities: [ClientEntity],
  migrations: [`${__dirname}/migrations/*.ts`],
};

export default new DataSource(dataSourceOptions);
