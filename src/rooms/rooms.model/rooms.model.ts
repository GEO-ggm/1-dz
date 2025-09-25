import { ReservationModel } from 'src/reservation/reservation.model/reservation.model';

export class RoomsModel {
    _id: string;
    numRoom: number;
    photoRoom?: string;
    titleRoom: string;
    ownerRoom: string;
    dignities: string[];
    reservation: ReservationModel;
}
