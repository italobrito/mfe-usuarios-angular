import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // FormBuilder,
  // FormGroup,
  ReactiveFormsModule,
  // Validators,
} from '@angular/forms';

import { DropdownType } from '@entities/dropdown-type';

import { GENEROS } from '@shared/constants/generos';

import { FormAbstractComponent } from '@shared/components/abstract-components/form-abstract-component';

@Component({
  selector: 'app-informacoes-pessoais',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InformacoesPessoaisComponent extends FormAbstractComponent {

  _listaGeneros: Array<DropdownType> = GENEROS;

}
