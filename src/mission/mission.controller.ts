import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { MissionService } from './mission.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { MissionStatus } from '@prisma/client';

@Controller('mission')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  @Post()
  create(@Body() createMissionDto: CreateMissionDto) {
    return this.missionService.create(createMissionDto);
  }

  @Get()
  findAll() {
    return this.missionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMissionDto: UpdateMissionDto) {
    return this.missionService.update(id, updateMissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.missionService.remove(id);
  }

   // Mettre à jour le statut d'une mission
   @Patch(':id/status')
   updateMissionStatus(
     @Param('id') id: string,
     @Body('status') status: MissionStatus,
   ) {
     return this.missionService.updateMissionStatus(id, status);
   }
//routes pour compter une mission
   @Get('count')
   countMission() {
     return this.missionService.countMission();
   }

   //Recupere les missions terminees
   @Get(':id/mission/completed')
   getCompletedMissionByVehiclesId(@Param('id') vehicleid: string) {
     return this.missionService.getCompletedMissionByVehicleId(vehicleid);
   }

   //Route pour rechercher une mission par date de debut et de fin
   @Get('date-range')
   findMissionByDateRange(
     @Query('start') dateStart: string,
     @Query('end') dateFinish: string,
   ) {
     return this.missionService.findMissionByDateRange(
       new Date(dateStart),
       new Date(dateFinish),
     );
   }
   
}
