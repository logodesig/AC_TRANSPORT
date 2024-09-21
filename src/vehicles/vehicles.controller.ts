import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { MissionStatus } from '@prisma/client';
import { publicDecrypt } from 'crypto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }
  

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }

  //routes pour compter un vehicules
  @Get('count')
  countVehicles() {
    return this.vehiclesService.countVehicles();
  }

  //routes pour compter une mission d'un vehicule
  
  @Get(':id/mission/count')
  countMissionByVehicleId(@Param('id') vehicleId: string) {
    return this.vehiclesService.countMissionByVehicleId(vehicleId);
  }
//routes pour recupere les vehicules en attente d'une mission
  // @Get(':id/vehicles/pending')
  // getPendingVehicleByVehicleId(@Param('id') vehicleid: string) {
  //   return this.vehiclesService.getPendingVehicleByVehicleId(vehicleid);
  // }

  //Recupere les vehicules terminees
  
  @Get(':id/vehicles/completed')
  getCompletedVehiclesByVehiclesId(@Param('id') missionid: string) {
    return this.vehiclesService.getCompletedMissionByVehicleId(missionid);
  }

//route pour recuperer les Vehicules en fonction de l'ID d'un administrateur by sosthenes
@Get('allDriverByUserId/:userId')
allVehiculeByUserId(@Param('userId') userId:string){
  return this.vehiclesService.allVehiculeByUserId(userId);
}

//route pour mettre a jour les informations d'une voiture selon le UserId by sosthenes
@Patch('UpdateVehiculesByUserId/:userId/:vId')
UpdateVehiculesByUserId(@Param('userId') userId:string, @Param('vId') vId:string, @Body() updateVehicleDto: UpdateVehicleDto){
  return this.vehiclesService.UpdateVehiculesByUserId(userId,vId,updateVehicleDto);

}


//route pour delete un vehicule by sosthenes
@Patch('deleteVehiculeByUserId/:userId/:vId')
deleteDriverProfilByUserId(@Param('userId') userId:string, @Param('vId') vId:string){
  return this.vehiclesService.deleteVehiculeByUserId(userId,vId)
}

//route pour compter le nombre vehicule by sosthenes
@Get('countVehiculeByUserId/:userId')
countVehiculeByUserId(@Param('userId') userId:string){
  return this.vehiclesService.countVehiculeByUserId(userId);
}

   // Mettre à jour le statut d'un vehicule
  //  @Patch(':id/status')
  //  updateVehicleStatus(
  //    @Param('id') id: string,
  //    @Body('status') status: MissionStatus,
  //  ) {
  //    return this.vehiclesService.updateVehicleStatus(id, status);
  //  }
}
