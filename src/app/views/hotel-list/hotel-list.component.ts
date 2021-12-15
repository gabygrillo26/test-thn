import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/shared/mocks/mock-hotels';
import { IHotel } from 'src/app/shared/models/hotel';
import { HotelService } from '../hotel-item/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: IHotel[] = [];
  promoCodeHotel: number;
  @Input() set promoCode(value: number){
    this.promoCodeHotel = value;
  };

  constructor(private hotelService: HotelService) {
    this.hotels = Hotel.hotelsDB;
    this.checkHotelSelected();
  }

  ngOnInit(): void {
  }

  checkHotelSelected() {
    let hotelSelected = this.hotelService.getHotelSelected();
    if(!hotelSelected){
      hotelSelected = this.hotels[0];
      hotelSelected.selected = true;
    }else{
      this.hotels.find(hotel => hotel.id == hotelSelected.id).selected = true;
    }
    this.hotelService.addHotelSummary(hotelSelected);
  }

  onHotelSelected(hotelSelection: IHotel) {
    this.hotels.map(hotel => {
      hotel.selected = hotel.id == hotelSelection.id;
    })
    this.hotelService.addHotelSummary(hotelSelection);
  }
}
