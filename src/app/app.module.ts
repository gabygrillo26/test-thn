import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './views/hotel-list/hotel-list.component';
import { HotelItemComponent } from './views/hotel-item/hotel-item.component';
import { SummaryComponent } from './views/summary/summary.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { CheckBarComponent } from './views/check-bar/check-bar.component';
import { RoomRatesComponent } from './views/room-rates/room-rates.component';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelItemComponent,
    SummaryComponent,
    FooterComponent,
    HeaderComponent,
    CheckBarComponent,
    RoomRatesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
