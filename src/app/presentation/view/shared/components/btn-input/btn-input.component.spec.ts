import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpInputComponent } from './btn-input.component';

describe('BtpInputComponent', () => {
  let component: BtpInputComponent;
  let fixture: ComponentFixture<BtpInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BtpInputComponent]
    });
    fixture = TestBed.createComponent(BtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
