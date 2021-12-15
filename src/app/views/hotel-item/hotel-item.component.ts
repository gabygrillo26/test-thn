import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotel: IHotel;
  @Output() selectHotelEvent: EventEmitter<IHotel> = new EventEmitter<IHotel>();
  _promoCode: number;
  discount: number;

  @Input() set promoCodeHotel(value: number){
    console.log('promoCode1: ', value)
    this._promoCode = value;
    this.setDiscount(value);
  };

  get promoCode() : number{
    return this._promoCode;
  }
  constructor() { }

  ngOnInit(): void {
  }

  selectHotel(hotel: IHotel) {
    this.selectHotelEvent.emit(hotel);
  }

  setDiscount(promoCode){
    console.log('hola1')
    if(promoCode){
      console.log('hola')
      this.discount = ((100 - promoCode) / 100);
    }
  }
}
