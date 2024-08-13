import { Module } from '@nestjs/common';
import { MarchandiseService } from './marchandise.service';
import { MarchandiseController } from './marchandise.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [MarchandiseController],
  providers: [MarchandiseService, PrismaService],
})
export class MarchandiseModule {}
