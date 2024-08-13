import { Injectable } from '@nestjs/common';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class MaintenanceService {
  constructor(private prisma: PrismaService) {}
  create(createMaintenanceDto: CreateMaintenanceDto) {
    return this.prisma.maintenance.create({ data: createMaintenanceDto });
  }

  findAll() {
    return this.prisma.maintenance.findMany();
  }

  findOne(id: string) {
    return this.prisma.maintenance.findUnique({ where: { id: id } });
  }

  update(id: string, updateMaintenanceDto: UpdateMaintenanceDto) {
    return this.prisma.maintenance.update({ where: { id: id }, data: updateMaintenanceDto });
  }

  remove(id: string) {
    return this.prisma.maintenance.delete({ where: { id: id } });
  }
}
