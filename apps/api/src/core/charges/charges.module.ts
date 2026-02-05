import { Module } from '@nestjs/common';
import { ChargesController } from './charges.controller';
import { ChargesService } from './charges.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ChargesController],
  providers: [ChargesService],
  exports: [ChargesService],
})
export class ChargesModule {}
