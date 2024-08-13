import { PartialType } from '@nestjs/swagger';
import { CreateDriverprofilDto } from './create-driverprofil.dto';

export class UpdateDriverprofilDto extends PartialType(CreateDriverprofilDto) {}
