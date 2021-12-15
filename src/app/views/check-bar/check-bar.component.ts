import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { IReservation } from 'src/app/shared/models/reservation-day';
import { CheckService } from './check.service';

@Component({
  selector: 'app-check-bar',
  templateUrl: './check-bar.component.html',
  styleUrls: ['./check-bar.component.css']
})
export class CheckBarComponent implements OnInit {
  checkin: NgbDateStruct;
  checkout: NgbDateStruct;
  today: Date;
  todayStruct: NgbDateStruct;
  tomorrowStruct: NgbDateStruct;
  checkForm: FormGroup;
  adultsList: string[] = [];
  childrenList: string[] = [];

  constructor(private checkService: CheckService) {
    this.checkForm = new FormGroup({
      checkin: new FormControl('', Validators.required),
      checkout: new FormControl('', Validators.required),
      adults: new FormControl(null),
      children: new FormControl(null)
    });
    this.adultsList = [
      '1 Adult',
      '2 Adult',
      '3 Adult',
      '4 Adult',
      '5 Adult',
      '6 Adult',
      '7 Adult',
      '8 Adult',
      '9 Adult',
    ]
    this.childrenList = [
      '1 Children',
      '2 Children',
      '3 Children',
      '4 Children',
      '5 Children',
      '6 Children',
      '7 Children',
      '8 Children',
      '9 Children',
    ]
   }

  ngOnInit(): void {
    this.getDateToday();
    this.checkReservationSelected();
  }

  getDateToday() {
    this.today = new Date();
    this.todayStruct = { day: this.today.getUTCDate(), month: this.today.getUTCMonth() + 1, year: this.today.getUTCFullYear()};
    this.tomorrowStruct = { day: this.today.getUTCDate()+1, month: this.today.getUTCMonth() + 1, year: this.today.getUTCFullYear()};
  }

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }

  toModel(time: NgbDateStruct): string {
    if (!time) {
      return null;
    }
    return `${this.pad(time.day)}-${this.pad(time.month)}-${this.pad(time.year)}` ;
  }

  fromModel(date: string): NgbDateStruct {
    return (date && Number(date.substring(0, 2)) && Number(date.substring(3, 5)) && Number(date.substring(6, 10))) ?
                {year: Number(date.substring(6, 10)),
                    month: Number(date.substring(3, 5)),
                    day: Number(date.substring(0, 2))} : null;
  }

  checkReservationSelected() {
    let reservationSelectd = this.checkService.getReservationSelected();
    if(reservationSelectd){
      this.checkForm.controls['checkin'].setValue(this.fromModel(reservationSelectd.checkin));
      this.checkForm.controls['checkout'].setValue(this.fromModel(reservationSelectd.checkout));
      this.checkForm.controls['adults'].setValue(reservationSelectd.adults);
      this.checkForm.controls['children'].setValue(reservationSelectd.children);
    }else{
      this.checkForm.controls.checkin.setValue(this.todayStruct);
      this.checkForm.controls.checkout.setValue(this.tomorrowStruct);
      this.modify();
    }
  }

  modify() {
    let reservationDay: IReservation = new IReservation();
    reservationDay.checkin = this.toModel(this.checkForm.controls['checkin'].value);
    reservationDay.checkout = this.toModel(this.checkForm.controls['checkout'].value);
    reservationDay.adults = this.checkForm.controls['adults'].value?
      this.checkForm.controls['adults'].value: '';
    reservationDay.children = this.checkForm.controls['children'].value?
        this.checkForm.controls['children'].value: '';
    this.checkService.addReservationSummary(reservationDay);
  }
}
