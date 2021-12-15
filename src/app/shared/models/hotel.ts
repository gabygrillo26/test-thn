import { BaseEntity } from "./base-entity";

export class IHotel extends BaseEntity {
    name: string;
    image: string;
    description: string;
    size: string;
    beds: string;
    people: string;
    price: number;
    selected: boolean;

    constructor() {
        super();
    }
}
