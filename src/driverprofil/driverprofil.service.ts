import { Injectable } from '@nestjs/common';
import { CreateDriverprofilDto } from './dto/create-driverprofil.dto';
import { UpdateDriverprofilDto } from './dto/update-driverprofil.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DriverprofilService {
  constructor(private prisma: PrismaService) {}


   async create(createDriverprofilDto: CreateDriverprofilDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createDriverprofilDto.password, salt);
    const createdDriverProfil = await this.prisma.driverProfil.create({
      data: {
        ...createDriverprofilDto,
        password: hashedPassword,
      },
    });
    return createdDriverProfil;
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

  //ici je recupere les DriverProfil en fonction de l'ID d'un administrateur by sosthenes
  allDriverByUserId(userId:string){
    return this.prisma.driverProfil.findMany({
      where:{
        UserId:userId,
        isDelete:false
      },
      select:{
        name:true,
        email:true,
        DrivingLicense:true,
        type:true,
        DateOfBirth:true
      }
    })
  }

  //route pour mettre a jour les informations d'un driverProfil by sosthenes
  updateDriverProfilByUserId(userId:string, DPId:string, updateDriverprofilDto:UpdateDriverprofilDto){
    return this.prisma.driverProfil.update({
      where:{
        id:DPId,
        UserId:userId,
        isDelete:false
      },
      data:updateDriverprofilDto,
    });
  }

  //route pour delete un driverProfil by sosthenes
  deleteDriverProfilByUserId(userId:string,DPId:string,updateDriverprofilDto:UpdateDriverprofilDto){
    return this.prisma.driverProfil.update({
      where:{
        id:DPId,
        UserId:userId,
        isDelete:false,
      },
      data:updateDriverprofilDto
    })
  }


//route pour compter le nombre DriverProfile by sosthenes
countAllDriverProfilByUserId(userId:string){
  return this.prisma.driverProfil.count({
    where:{
      UserId:userId,
      isDelete:false
    }
  });
}

}
