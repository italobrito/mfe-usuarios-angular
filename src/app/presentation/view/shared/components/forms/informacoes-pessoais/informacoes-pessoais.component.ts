import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropdownType } from '@entities/dropdown-type';

import { GENEROS } from '@shared/constants/generos';

import { FormAbstractComponent } from '@shared/components/abstract-components/form-abstract-component';
import { BtnInputComponent } from '@shared/components/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@shared/components/btn-dropdown/btp-dropdown.component';

@Component({
  selector: 'app-informacoes-pessoais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent],
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InformacoesPessoaisComponent extends FormAbstractComponent {
  _listaGeneros: Array<DropdownType> = GENEROS;

  ngOnInit(): void {
    console.log('InformacoesPessoaisComponent = ', this.formulario.get('nomeCompleto'));
  }

}
