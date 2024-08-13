import { PartialType } from '@nestjs/swagger';
import { CreateMarchandiseDto } from './create-marchandise.dto';

export class UpdateMarchandiseDto extends PartialType(CreateMarchandiseDto) {}
