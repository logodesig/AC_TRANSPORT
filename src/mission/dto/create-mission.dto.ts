import { MissionStatus } from "@prisma/client";

export class CreateMissionDto {
    description: string;
    dateStart: Date;
    driverid: string;
    vehicleid: string;
    status: MissionStatus;
    dateFinish: Date;
    userCreateId: string
}
