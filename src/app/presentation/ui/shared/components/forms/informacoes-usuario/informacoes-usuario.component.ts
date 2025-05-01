import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  ReactiveFormsModule,
} from '@angular/forms';

import { 
  AvatarImagemComponent, 
  FormsAbstractComponent, 
  InformacoesPessoaisComponent, 
  InformacoesEnderecoComponent, 
  InformacoesProfissionaisComponent, 
  NotificadorMensagensComponent,
  InformacoesPessoaisFormBuilderValidators,
  EnderecoFormBuilderValidators,
  InformacoesProfissionaisFormBuilderValidators
} from 'shared-forms';

@Component({
  selector: 'app-informacoes-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarImagemComponent,
    InformacoesPessoaisComponent,
    InformacoesEnderecoComponent,
    InformacoesProfissionaisComponent,
    NotificadorMensagensComponent,
  ],
  templateUrl: './informacoes-usuario.component.html',
})
export class InformacoesUsuarioComponent extends FormsAbstractComponent {

  criarFormulario() {
    this._formulario = this.formBuilder.group({
      informacoesPessoais: this.formBuilder.group(InformacoesPessoaisFormBuilderValidators.getModel()),
      endereco: this.formBuilder.group(EnderecoFormBuilderValidators.getModel()),
      informacoesProfissionais: this.formBuilder.group(InformacoesProfissionaisFormBuilderValidators.getModel()),
      avatar: [''],
      id: [''],
    });
  }
}
