import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from './informacoes-usuario/informacoes-usuario.component';

@Component({
    selector: 'pages-abstract-component',
    template: '',
    standalone: true,
    imports: [CommonModule],
})
export abstract class PagesAbstractComponent {
  @ViewChild(InformacoesUsuarioComponent) componente!: InformacoesUsuarioComponent;
  solicitarRequisicao(): void {
    this.componente.ativarValidacoes();
    if (this.componente._formulario.valid) {
      console.log('CadastrarComponent FORMULARIO VALIDO', this.componente._formulario.getRawValue());
      this.persistirDados();
    } else {
      console.log('CadastrarComponent FORMULARIO INVALIDO', this.componente._formulario.getRawValue());
    }
  }
  abstract persistirDados(): void;
}
