import { Injectable, HttpServer } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';
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
}