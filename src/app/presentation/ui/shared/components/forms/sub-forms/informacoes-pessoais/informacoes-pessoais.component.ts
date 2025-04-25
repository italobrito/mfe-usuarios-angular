import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormsAbstractComponent } from '@ui/shared/components/forms/sub-forms/sub-forms-abstract-component';
import { BtnInputComponent } from '@ui/shared/components/inputs/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@ui/shared/components/inputs/btn-dropdown/btp-dropdown.component';

import { DropdownType } from '@entities/dropdown-type';

import { GENEROS } from '@ui/shared/constants/generos';

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
})
export class InformacoesPessoaisComponent extends SubFormsAbstractComponent {
  _listaGeneros: Array<DropdownType> = GENEROS;
}
