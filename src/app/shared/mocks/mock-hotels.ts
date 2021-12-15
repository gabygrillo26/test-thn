import { IHotel } from "../models/hotel";

export class Hotel {
  public static hotelsDB: IHotel[] = [
    {
      id: 1,
      name: 'Mini Dreamy Room',
      image: '../assets/images/room_1.png',
      description: 'Generous and confortable these modern furnished rooms offer two queen-size beds and areon the first floor',
      size: '20m2',
      beds: '1',
      people: '2',
      price: 200,
      selected: false
    },
    {
      id: 2,
      name: 'Seet Bungalow',
      image: 'assets/images/room_2.png',
      description: 'The perfect blend of comfort nd culture, our superior room with a central garden view has the stunning.',
      size: '50m2',
      beds: '1',
      people: '2',
      price: 350,
      selected: false
    },
    {
      id: 3,
      name: 'Los Cocos Suite',
      image: '../assets/images/room_3.png',
      description: 'If you want a little extrafrom you stay, you might like our superior room. A ocean view room has a private beach.',
      size: '125m2',
      beds: '3',
      people: '4',
      price: 450,
      selected: false
    }
  ]
}
