import { MissionStatus } from "@prisma/client";

export class CreateMissionDto {
    missionName: string;
    description: string;
    dateStart: Date;
    driverprofilId: string;
    vehicleid: string;
    dateFinish: Date;
    UserId: string
}

