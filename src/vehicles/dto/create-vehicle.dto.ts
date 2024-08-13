export class CreateVehicleDto {
    name: string;
    type: string;
    immatriculation: string;
    state: string;
    model: string;
    tonnage: number;
    firstYearTakeoff: Date;
    address: string;
    latitude: number; // Ajoutez cette ligne
    longitude: number; // Ajoutez cette ligne
    }