import { VolumeUnit } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class CreateMarchandiseDto {
    type: string;
    name: string;
    quantity: number;
    transitNumber: number;
    volume: Decimal;
    volumeUnit: VolumeUnit;
    vehicleId: string
    }

