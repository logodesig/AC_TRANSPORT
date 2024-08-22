import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MissionStatus } from '@prisma/client';

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
  //compter une mission
  countMission() {
    return this.prisma.mission.count();
  }

    // Mettre à jour le statut d'une mission
updateMissionStatus(id: string, status: MissionStatus) {
  return this.prisma.mission.update({
  where: { id: id },
  data: { status: status },
  });
  }
    
    // Méthode pour récupérer les mission terminées
    getCompletedMissionByVehicleId(vehicleId: string) {
    return this.prisma.mission.findMany({
    where: { vehicleid: vehicleId, status: 'FINISH' },
    });
    }

     // Rechercher des mission par date de début et de fin
  findMissionByDateRange(dateStart: Date, dateFinish: Date) {
    return this.prisma.mission.findMany({
    where: {
    dateStart: {
    gte: dateStart,
    },
    dateFinish: {
    lte: dateFinish,
    },
    },
    });
    }


}
