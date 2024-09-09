
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class LocationService {
// constructor(private prisma: PrismaService) {}

// async createLocation(data: { latitude: number; longitude: number }) {
// return this.prisma.location.create({
// data: {
// latitude: data.latitude,
// longitude: data.longitude,
// },
// });
// }


// async getAllLocations() {
//     return this.prisma.location.findMany();
//     }
//     }
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Location } from '@prisma/client';

@Injectable()
export class LocationService {
constructor(private prisma: PrismaService) {}

createLocation(data: { latitude: number; longitude: number }): Promise<Location> {
return this.prisma.location.create({
data: {
latitude: data.latitude,
longitude: data.longitude,
},
});
}

getAllLocations() {
return this.prisma.location.findMany();
}

getLocationById(id: string) {
return this.prisma.location.findUnique({
where: { id },
});
}

updateLocation(id: string, data: { latitude?: number; longitude?: number }){
return this.prisma.location.update({
where: { id },
data,
});
}

deleteLocation(id: string) {
return this.prisma.location.delete({
where: { id },
});
}
}