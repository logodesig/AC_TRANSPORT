export class CreateVehicleDto {
    id: string;
    name: string;
    type: string;
    state: string;
    model: string;
    tonnage: number;
    firstYearTakeoff: Date;
    latitude: number; // Ajoutez cette ligne
    longitude: number; // Ajoutez cette ligne
    }