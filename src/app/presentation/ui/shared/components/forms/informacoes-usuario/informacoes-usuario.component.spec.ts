import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesUsuarioComponent } from './informacoes-usuario.component';

describe('InformacoesUsuarioComponent', () => {
  let component: InformacoesUsuarioComponent;
  let fixture: ComponentFixture<InformacoesUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InformacoesUsuarioComponent]
    });
    fixture = TestBed.createComponent(InformacoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
