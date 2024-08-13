import { Injectable } from '@nestjs/common';
import { CreateOpportuniteDto } from './dto/create-opportunite.dto';
import { UpdateOpportuniteDto } from './dto/update-opportunite.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class OpportuniteService {
  constructor(private prisma: PrismaService) {}
  create(createOpportuniteDto: CreateOpportuniteDto) {
    return this.prisma.opportunite.create({ data: createOpportuniteDto });
  }

  findAll() {
    return this.prisma.opportunite.findMany();
  }

  findOne(id: string) {
    return this.prisma.opportunite.findUnique({ where: { id: id } });
  }

  update(id: string, updateOpportuniteDto: UpdateOpportuniteDto) {
    return this.prisma.opportunite.update({ where: { id: id }, data: updateOpportuniteDto });
  }

  remove(id: string) {
    return this.prisma.opportunite.delete({ where: { id: id } });
  }
}
