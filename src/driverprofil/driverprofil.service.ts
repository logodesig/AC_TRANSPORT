import { Injectable } from '@nestjs/common';
import { CreateDriverprofilDto } from './dto/create-driverprofil.dto';
import { UpdateDriverprofilDto } from './dto/update-driverprofil.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class DriverprofilService {
  constructor(private prisma: PrismaService) {}
  create(createDriverprofilDto: CreateDriverprofilDto) {
    return this.prisma.driverProfil.create({
       data: createDriverprofilDto,
      });
  }

  findAll() {
    return this.prisma.driverProfil.findMany();
  }

  findOne(id: string) {
    return this.prisma.driverProfil.findUnique({ where: { id: id } });
  }

  update(id: string, UpdateDriverprofilDto: UpdateDriverprofilDto) {
    return this.prisma.driverProfil.update({ where: { id: id }, data: UpdateDriverprofilDto });
  }

  remove(id: string) {
    return this.prisma.driverProfil.delete({ where: { id: id } });
  }

  //methodes pour compter des chauffeur
  countdriverprofil() {
    return this.prisma.driverProfil.count();
  }
}
