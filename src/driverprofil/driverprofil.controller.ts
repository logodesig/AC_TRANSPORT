import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverprofilService } from './driverprofil.service';
import { CreateDriverprofilDto } from './dto/create-driverprofil.dto';
import { UpdateDriverprofilDto } from './dto/update-driverprofil.dto';
import { Public } from '../auth/decorators/public.decorator';
@Controller('driverprofil')
export class DriverprofilController {
  constructor(private readonly driverprofilService: DriverprofilService) {}
@Public()
  @Post()
  create(@Body() createDriverprofilDto: CreateDriverprofilDto) {
    return this.driverprofilService.create(createDriverprofilDto);
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
@Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverprofilService.remove(id);
  }
  @Public ()
  @Get('count')
  countDriverprofil() {
    return this.driverprofilService.countdriverprofil();
  }
}
