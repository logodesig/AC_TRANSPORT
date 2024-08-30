
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
constructor(private readonly locationService: LocationService) {}

@Post()
async create(@Body() data: { latitude: number; longitude: number }) {
return this.locationService.createLocation(data);
}

@Get()
async findAll() {
return this.locationService.getAllLocations();
}
}