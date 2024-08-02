import { UserType } from "@prisma/client"
export class CreateUserDto {
    email:        string;     
    name:         string;
    type:          UserType;
    password:     string
    surname:      string;
    roleId:       string;
    avatarUrl:    string;
}
