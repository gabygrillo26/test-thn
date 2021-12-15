import { BaseEntity } from "./base-entity";

export class IReservation extends BaseEntity {
    checkin: string;
    checkout: string;
    adults: string;
    children: string;

    constructor() {
        super();
    }
}
