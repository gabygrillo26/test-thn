import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRatesComponent } from './room-rates.component';

describe('RoomRatesComponent', () => {
  let component: RoomRatesComponent;
  let fixture: ComponentFixture<RoomRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
