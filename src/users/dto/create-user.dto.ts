import { UserType } from "@prisma/client"
export class CreateUserDto {
    name:         string;
    email:        string;     
    type:          UserType;
    password:     string
    surname:      string;
    // roleId:       string;
    avatarUrl:    string;
    driverProfilId: string;
}
