import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInputComponent } from './btn-input.component';

describe('BtnInputComponent', () => {
  let component: BtnInputComponent;
  let fixture: ComponentFixture<BtnInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BtnInputComponent]
    });
    fixture = TestBed.createComponent(BtnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
