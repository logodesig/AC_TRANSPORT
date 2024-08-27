import { Injectable, HttpServer } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MissionStatus } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}
  
  create(createVehicleDto: CreateVehicleDto) {
    return this.prisma.vehicles.create({ data: createVehicleDto });
  }
  

  findAll() {
    return this.prisma.vehicles.findMany();
  }
  

  findOne(id: string) {
    return this.prisma.vehicles.findUnique({ where: { id: id } });
 }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.prisma.vehicles.update({ where: { id: id }, data: updateVehicleDto });
  }

  remove(id: string) {
    return this.prisma.vehicles.delete({ where: { id: id } });
  }

  //methodes pour compter des vehicules
  countVehicles() {
    return this.prisma.vehicles.count();
  }

  //methodes pour compter une mission d'un vehicule
  countMissionByVehicleId(vehicleId: string) {
    return this.prisma.mission.count({
      where: { vehicleid: vehicleId },
    });
  }

   // Méthode pour récupérer les vehicule en attente d'une mission
// getPendingVehicleByVehicleId(vehicleid: string) {
//   return this.prisma.vehicles.findMany({
//   where: { vehicleid : vehicleid, status: MissionStatus },
//   });
//   }

// Méthode pour récupérer les vehicules terminées
getCompletedMissionByVehicleId(vehicleId: string) {
  return this.prisma.mission.findMany({
  where: { vehicleid: vehicleId, status: 'FINISH' },
  });
  }

   // Mettre à jour le statut d'un vehicule
// updateVehicleStatus(id: string, status: MissionStatus) {
//   return this.prisma.vehicles.update({
//   where: { id: id },
//   data: { status: status },
//   });
//   }

}