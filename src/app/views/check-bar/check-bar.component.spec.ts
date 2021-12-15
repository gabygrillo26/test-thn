import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBarComponent } from './check-bar.component';

describe('CheckBarComponent', () => {
  let component: CheckBarComponent;
  let fixture: ComponentFixture<CheckBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
