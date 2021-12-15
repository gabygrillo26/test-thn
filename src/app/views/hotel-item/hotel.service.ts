import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHotel } from 'src/app/shared/models/hotel';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  _selectedHotelSubject: BehaviorSubject<IHotel> = new BehaviorSubject(null);

constructor(private storageService: StorageService) {
  this.addHotelSummary(JSON.parse(this.storageService.get('hotelSelected')));
 }

  addHotelSummary(hotelSelection: IHotel) {
    this._selectedHotelSubject.next(hotelSelection);
  }

  getHotelSelected() {
    return this._selectedHotelSubject.getValue();
  }

}
