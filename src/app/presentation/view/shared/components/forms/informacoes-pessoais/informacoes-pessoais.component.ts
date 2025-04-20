import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsAbstractComponent } from '@shared/components/forms/forms-abstract-component';
import { BtnInputComponent } from '@shared/components/inputs/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@shared/components/inputs/btn-dropdown/btp-dropdown.component';

import { DropdownType } from '@entities/dropdown-type';

import { GENEROS } from '@shared/constants/generos';

@Component({
  selector: 'app-informacoes-pessoais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-pessoais.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InformacoesPessoaisComponent extends FormsAbstractComponent {
  _listaGeneros: Array<DropdownType> = GENEROS;
}
