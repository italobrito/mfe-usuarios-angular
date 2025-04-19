import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesProfissionaisComponent } from './informacoes-profissionais.component';

describe('InformacoesProfissionaisComponent', () => {
  let component: InformacoesProfissionaisComponent;
  let fixture: ComponentFixture<InformacoesProfissionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InformacoesProfissionaisComponent]
    });
    fixture = TestBed.createComponent(InformacoesProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
