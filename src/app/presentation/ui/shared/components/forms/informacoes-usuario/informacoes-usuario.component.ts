import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  ReactiveFormsModule,
} from '@angular/forms';

import { InformacoesPessoaisFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-pessoais';
import { InformacoesProfissionaisFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-profissionais';
import { EnderecoFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-endereco';

import { InformacoesPessoaisComponent } from '@shared/components/forms/sub-forms/informacoes-pessoais/informacoes-pessoais.component';
import { InformacoesEnderecoComponent } from '@shared/components/forms/sub-forms/informacoes-endereco/informacoes-endereco.component';
import { InformacoesProfissionaisComponent } from '@shared/components/forms/sub-forms/informacoes-profissionais/informacoes-profissionais.component';
import { AvatarImagemComponent } from '@shared/components/avatar-imagem/avatar-imagem.component';

import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { FormsAbstractComponent } from '@shared/components/forms/abstracts-components/forms-abstract.component';

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
    NotificadorMensagensComponent
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
    });
  }
}
