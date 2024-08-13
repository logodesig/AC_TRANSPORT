import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarchandiseService } from './marchandise.service';
import { CreateMarchandiseDto } from './dto/create-marchandise.dto';
import { UpdateMarchandiseDto } from './dto/update-marchandise.dto';

@Controller('marchandise')
export class MarchandiseController {
  constructor(private readonly marchandiseService: MarchandiseService) {}

  @Post()
  create(@Body() createMarchandiseDto: CreateMarchandiseDto) {
    return this.marchandiseService.create(createMarchandiseDto);
  }

  @Get()
  findAll() {
    return this.marchandiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marchandiseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarchandiseDto: UpdateMarchandiseDto) {
    return this.marchandiseService.update(id, updateMarchandiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marchandiseService.remove(id);
  }
}
