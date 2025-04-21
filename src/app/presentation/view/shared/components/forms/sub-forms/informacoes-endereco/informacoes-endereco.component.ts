import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormsAbstractComponent } from '../sub-forms-abstract-component';

import { BtnInputComponent } from '@shared/components/inputs/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@shared/components/inputs/btn-dropdown/btp-dropdown.component';
import { DropdownType } from '@entities/dropdown-type';
import { ESTADOS_BRASILEIROS } from '@shared/constants/estados-brasileiros';

@Component({
  selector: 'app-informacoes-endereco',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-endereco.component.html',
})
export class InformacoesEnderecoComponent extends SubFormsAbstractComponent {
  _listaEstados: Array<DropdownType> = ESTADOS_BRASILEIROS;
}
