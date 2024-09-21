import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverprofilService } from './driverprofil.service';
import { CreateDriverprofilDto } from './dto/create-driverprofil.dto';
import { UpdateDriverprofilDto } from './dto/update-driverprofil.dto';
import { Public } from '../auth/decorators/public.decorator';
import { UpdateAddressDto } from 'src/address/dto/update-address.dto';

@Controller('driverprofil')

export class DriverprofilController {
  constructor(private readonly driverprofilService: DriverprofilService) {}

  @Post('newDriver')
  create(@Body() createDriverprofilDto: CreateDriverprofilDto) {
     return  this.driverprofilService.create(createDriverprofilDto);
      

  }

  @Get()
  findAll() {
    return this.driverprofilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverprofilService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverprofilDto: UpdateDriverprofilDto) {
    return this.driverprofilService.update(id, updateDriverprofilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverprofilService.remove(id);
  }
  

  @Get('count')
  countDriverprofil() {
    return this.driverprofilService.countdriverprofil();
  }

  //route pour recuperer les DriverProfil en fonction de l'ID d'un administrateur by sosthenes
  @Get('allDriverByUserId/:userId')
  allDriverByUserId(@Param('userId') userId:string){
    return this.driverprofilService.allDriverByUserId(userId);
  }

  //route pour mettre a jour les informations d'un driverProfil by sosthenes
  @Patch('updateDriverProfilByUserId/:userId/:DPId')
  updateDriverProfilByUserId(@Param('userId') userId:string, @Param('DPId') DPId:string, @Body() updateDriverprofilDto:UpdateDriverprofilDto){
    return this.driverprofilService.updateDriverProfilByUserId(userId,DPId,updateDriverprofilDto);
  }

  //route pour delete un driverProfil by sosthenes
  @Patch('deleteDriverProfilByUserId/:userId/:DPId')
  deleteDriverProfilByUserId(@Param('userId') userId:string, @Param('DPId') DPId:string){
    return this.driverprofilService.deleteDriverProfilByUserId(userId,DPId)
  }
  
//route pour compter le nombre DriverProfile by sosthenes
@Get('countAllDriverProfilByUserId/:userId')
countAllDriverProfilByUserId(@Param('userId') userId:string){
  return this.driverprofilService.countAllDriverProfilByUserId(userId);
}


}
