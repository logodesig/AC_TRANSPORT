
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService {
constructor(private prisma: PrismaService) {}

async createLocation(data: { latitude: number; longitude: number }) {
return this.prisma.location.create({
data: {
latitude: data.latitude,
longitude: data.longitude,
},
});
}


async getAllLocations() {
    return this.prisma.location.findMany();
    }
    }