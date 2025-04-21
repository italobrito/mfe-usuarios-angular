import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TEMA_SISTEMA } from '@shared/constants/tema-sistema';
import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';
import { TIPOS_STATUS_USUARIO } from '@shared/constants/tipos-status-usuario';

import { SubFormsAbstractComponent } from '../sub-forms-abstract-component';

import { DropdownType } from '@entities/dropdown-type';

import { BtnInputComponent } from '@shared/components/inputs/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@shared/components/inputs/btn-dropdown/btp-dropdown.component';

@Component({
  selector: 'app-informacoes-profissionais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-profissionais.component.html'
})
export class InformacoesProfissionaisComponent extends SubFormsAbstractComponent {
  _listaTemas: Array<DropdownType> = TEMA_SISTEMA;
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;
  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;
}
