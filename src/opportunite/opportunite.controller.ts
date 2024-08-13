import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpportuniteService } from './opportunite.service';
import { CreateOpportuniteDto } from './dto/create-opportunite.dto';
import { UpdateOpportuniteDto } from './dto/update-opportunite.dto';

@Controller('opportunite')
export class OpportuniteController {
  constructor(private readonly opportuniteService: OpportuniteService) {}

  @Post()
  create(@Body() createOpportuniteDto: CreateOpportuniteDto) {
    return this.opportuniteService.create(createOpportuniteDto);
  }

  @Get()
  findAll() {
    return this.opportuniteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opportuniteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpportuniteDto: UpdateOpportuniteDto) {
    return this.opportuniteService.update(id, updateOpportuniteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opportuniteService.remove(id);
  }
}
