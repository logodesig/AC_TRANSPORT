import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) {}
  create(createMissionDto: CreateMissionDto) {
    return this.prisma.mission.create({ data: createMissionDto });
  }
  findAll() {
    return this.prisma.mission.findMany();
  }

  findOne(id: string) {
      return this.prisma.mission.findUnique({ where: { id: id } });
  }

  update(id: string, updateMissionDto: UpdateMissionDto) {
    return this.prisma.mission.update({ where: { id: id }, data: updateMissionDto });
  }

  remove(id: string) {
    return this.prisma.mission.delete({ where: { id: id } });
  }

}
