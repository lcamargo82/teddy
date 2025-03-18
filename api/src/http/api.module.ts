import { Module } from '@nestjs/common';
import { ClientModule } from './clients/client.module';

@Module({
  imports: [ClientModule],
  controllers: [],
  providers: [],
  exports: [ClientModule],
})
export class ApiModule {}
