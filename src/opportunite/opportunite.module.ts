import { Module } from '@nestjs/common';
import { OpportuniteService } from './opportunite.service';
import { OpportuniteController } from './opportunite.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [OpportuniteController],
  providers: [OpportuniteService, PrismaService],
})
export class OpportuniteModule {}
