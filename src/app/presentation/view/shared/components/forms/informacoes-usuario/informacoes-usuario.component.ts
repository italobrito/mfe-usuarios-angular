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

import { FormsAbstractComponent } from '../forms-abstract-component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';

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

  preencherFormularioMock(): void {
    const mockData = {
      informacoesPessoais: {
        nomeCompleto: 'João da Silva',
        genero: 'M',
        email: 'joao.silva@example.com',
        telefone: '(11) 91234-5678',
        dataNascimento: '1990-01-01',
        cpf: '123.456.789-09',
        rg: '12.345.678-9',
      },
      endereco: {
        rua: 'Rua das Flores',
        numero: '123',
        complemento: 'Apto 45',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01000-000',
      },
      informacoesProfissionais: {
        cargo: 'Desenvolvedor',
        setor: 'Tecnologia',
        dataAdmissao: '01/01/1987',
        tipoUsuario: 'A',
        temaPreferido: 'E',
        status: 'A',
      },
      avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    };

    this._formulario.patchValue(mockData);
  }

}
