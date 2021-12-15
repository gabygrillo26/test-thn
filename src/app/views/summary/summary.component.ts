import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from 'src/app/shared/models/hotel';
import { IReservation } from 'src/app/shared/models/reservation-day';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CheckService } from '../check-bar/check.service';
import { HotelService } from '../hotel-item/hotel.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  _promoCode: number;

  @Input() set promoCode(value: number){
    this._promoCode = value;
    this.setDiscount(value);
  };

  get promoCode() : number{
    return this._promoCode;
  }
  discount: number;
  hotelSelected: IHotel;
  resevationSelected: IReservation;

  constructor(private hotelService: HotelService,
              private checkService: CheckService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.hotelService._selectedHotelSubject.subscribe( hotelSelected => {
      this.hotelSelected = hotelSelected;
    });

    this.checkService._selectedReservationSubject.subscribe( reservationSelected => {
      this.resevationSelected = reservationSelected;

    });
  }

  setDiscount(promoCode){
    if(promoCode){
      this.discount = ((100 - promoCode) / 100);
    }
  }

  save() {
    this.storageService.set('hotelSelected', JSON.stringify(this.hotelSelected), true);
    this.storageService.set('reservationSelected', JSON.stringify(this.resevationSelected), true);
  }

}
