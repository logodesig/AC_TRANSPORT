import { Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class IncidentsService {
  constructor(private prisma: PrismaService) {}
  create(createIncidentDto: CreateIncidentDto) {
    return this.prisma.incident.create({ data: createIncidentDto });
  }

  findAll() {
    return this.prisma.incident.findMany();
  }

  findOne(id: string) {
    return this.prisma.incident.findUnique({ where: { id: id } });
  }

  update(id: string, updateIncidentDto: UpdateIncidentDto) {
    return this.prisma.incident.update({ where: { id: id }, data: updateIncidentDto });
  }

  remove(id: string) {
    return this.prisma.incident.delete({ where: { id: id } });
  }
}
