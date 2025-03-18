import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ClientEntity } from 'src/core/models/entities/client.entity';
@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [ClientEntity],
            migrations: [__dirname + '/migrations/*.ts'],
            synchronize: false,
        }),
        inject: [ConfigService]
    })]
})
export class DatabaseModule {}
