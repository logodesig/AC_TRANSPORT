import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { IncidentsModule } from './incidents/incidents.module';
import { RolesModule } from './roles/roles.module';
import { OpportuniteModule } from './opportunite/opportunite.module';
import { AddressModule } from './address/address.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { MarchandiseModule } from './marchandise/marchandise.module';
import { MissionModule } from './mission/mission.module';
import { NoteModule } from './note/note.module';
import { DriverprofilModule } from './driverprofil/driverprofil.module';
//////
//import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [UsersModule,
     AuthModule, IncidentsModule,
      RolesModule, OpportuniteModule, AddressModule,
       VehiclesModule, MaintenanceModule, MarchandiseModule, MissionModule,
        NoteModule, DriverprofilModule ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}


