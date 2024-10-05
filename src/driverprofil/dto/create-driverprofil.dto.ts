import { UserType } from "@prisma/client";

export class CreateDriverprofilDto {
    DrivingLicense:  string;
    name: string;
    email: string;
    vehicleid:  string;
    DateOfBirth:  Date;
    DrivingLicenseRectoUrl:  string;
    DrivingLicenseVersoUrl:  string;
    // UserId:  string;
    userCreated: string;
}


