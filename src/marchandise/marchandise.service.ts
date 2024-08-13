import { Injectable } from '@nestjs/common';
import { CreateMarchandiseDto } from './dto/create-marchandise.dto';
import { UpdateMarchandiseDto } from './dto/update-marchandise.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class MarchandiseService {
  constructor(private prisma: PrismaService) {}
  create(createMarchandiseDto: CreateMarchandiseDto) {
    return this.prisma.marchandise.create({ data: createMarchandiseDto });
  }

  findAll() {
      return this.prisma.marchandise.findMany();
  }

  findOne(id: string) {
      return this.prisma.marchandise.findUnique({ where: { id: id } });
  }

  update(id: string, updateMarchandiseDto: UpdateMarchandiseDto) {
    return this.prisma.marchandise.update({ where: { id: id }, data: updateMarchandiseDto });
  }

  remove(id: string) {
    return this.prisma.marchandise.delete({ where: { id: id } });
  }
}
