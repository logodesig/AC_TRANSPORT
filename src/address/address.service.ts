import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
  async create(createAddressDto: CreateAddressDto) {
    let user = await this.prisma.user.findUnique({
      where:{
        id:createAddressDto.UserId,
        isDelete:false,
      }
    })

    if(user.type === "ADMIN"){
    return this.prisma.address.create({ data: createAddressDto});
    }else{
      let userC = await this.prisma.driverProfil.findUnique({
        where:{
          id:user.driverProfilId,
          isDelete:false
        }
      })

      createAddressDto.userCreated = userC.userCreated

    return this.prisma.address.create({ data: createAddressDto});

    }
  }

  //localhost:3001/address/allAdressByUserC/userIdAdmin
  allAdressByUserC(userId:string){
    return this.prisma.address.findMany({
      where:{
        UserId:userId,
        isDelete:false,
      },
      select:{
        id:true,
        country:true,
        city:true,
        quater:true,
        order:true,
        incidentId:true,
        missionId:true,
        detStart:true,
        detEnd:true,
      }
    });
  }


  //localhost:3001/address/allAdressByDriverP/userIdChauffeur

  async allAdressByDriverP(userId:string){

    let u = await this.prisma.user.findUnique({
      where:{
      id:userId,
        isDelete:false,
      }      
    })

    let uA = await this.prisma.driverProfil.findUnique({
      where:{
        id:u.driverProfilId,
        isDelete:false,
      }
    })

    return this.prisma.address.findMany({
      where:{
        userCreated:uA.userCreated,
        isDelete:false,
      },
      select:{
        id:true,
        country:true,
        city:true,
        quater:true,
        order:true,
        incidentId:true,
        missionId:true,
        detStart:true,
        detEnd:true,
      }
    });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: string) {
    return this.prisma.address.findUnique({ where: { id: id } });
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({ where: { id: id }, data: updateAddressDto });
  }

  remove(id: string) {
    return this.prisma.address.delete({ where: { id: id } });
  }
}
