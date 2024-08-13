import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import { PrismaService } from '../prisma/prisma.service';
import { Mission, MissionStatus } from '@prisma/client';

@Module({
  controllers: [MissionController],
  providers: [MissionService, PrismaService],
})
export class MissionModule {
  constructor(private readonly prisma: PrismaService) {}

  async getMission(id: string): Promise<Mission | null> {
    return this.prisma.mission.findUnique({
      where: { id },
      include: { vehicle: true },
    });
  }
}