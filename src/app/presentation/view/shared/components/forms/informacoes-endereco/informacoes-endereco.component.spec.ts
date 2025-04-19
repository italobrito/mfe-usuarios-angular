import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesEnderecoComponent } from './informacoes-endereco.component';

describe('InformacoesEnderecoComponent', () => {
  let component: InformacoesEnderecoComponent;
  let fixture: ComponentFixture<InformacoesEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InformacoesEnderecoComponent]
    });
    fixture = TestBed.createComponent(InformacoesEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
