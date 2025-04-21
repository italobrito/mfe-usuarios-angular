import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';
import { NotificadorMensagensComponent } from '../notificador-mensagens/notificador-mensagens.component';

@Component({
  selector: 'pages-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesAbstractComponent {
  @ViewChild(InformacoesUsuarioComponent) componente!: InformacoesUsuarioComponent;
  @ViewChild(NotificadorMensagensComponent) notificador!: NotificadorMensagensComponent;

  abstract persistirDados(): void;

  exibirMensagem(): void {
    this.notificador.adicionarMensagem('Cadastro de usuário', 'Houve um falha na sua requisição');
  }

  solicitarRequisicao(): void {
    this.componente.ativarValidacoes();
    if (this.componente._formulario.valid) {
      this.notificador.adicionarMensagem('Sucesso', 'Operação realizada com sucesso!', 'sucesso');
      console.log('CadastrarComponent FORMULARIO VALIDO', this.componente._formulario.getRawValue());
      this.persistirDados();
    } else {
      this.notificador.adicionarMensagem('Atenção', 'O formulário está incompleto', 'atenção');
      console.log('CadastrarComponent FORMULARIO INVALIDO', this.componente._formulario.getRawValue());
    }
  }

}
