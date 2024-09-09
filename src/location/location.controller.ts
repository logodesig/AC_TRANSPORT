
// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { LocationService } from './location.service';

// @Controller('locations')
// export class LocationController {
// constructor(private readonly locationService: LocationService) {}

// @Post()
// async create(@Body() data: { latitude: number; longitude: number }) {
// return this.locationService.createLocation(data);
// }

// @Get()
// async findAll() {
// return this.locationService.getAllLocations();
// }
// }
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
constructor(private readonly locationService: LocationService) {}

@Post()
create(@Body() data: { latitude: number; longitude: number }) {
return this.locationService.createLocation(data);
}

@Get()
findAll() {
return this.locationService.getAllLocations();
}

@Get(':id')
findOne(@Param('id') id: string) {
return this.locationService.getLocationById(id);
}

@Put(':id')
update(@Param('id') id: string, @Body() data: { latitude?: number; longitude?: number }) {
return this.locationService.updateLocation(id, data);
}

@Delete(':id')
remove(@Param('id') id: string) {
return this.locationService.deleteLocation(id);
}
}
