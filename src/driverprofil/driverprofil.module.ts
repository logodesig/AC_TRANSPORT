import { Module } from '@nestjs/common';
import { DriverprofilService } from './driverprofil.service';
import { DriverprofilController } from './driverprofil.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [DriverprofilController],
  providers: [DriverprofilService, PrismaService],
})
export class DriverprofilModule {}
