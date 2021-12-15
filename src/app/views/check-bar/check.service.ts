import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IReservation } from 'src/app/shared/models/reservation-day';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  _selectedReservationSubject: BehaviorSubject<IReservation> = new BehaviorSubject(null);

constructor(private storageService: StorageService) {
  this.addReservationSummary(JSON.parse(this.storageService.get('reservationSelected')));
}

getReservationSelected() {
  return this._selectedReservationSubject.getValue();
}

addReservationSummary(reservation: IReservation) {
  this._selectedReservationSubject.next(reservation);
}

}
