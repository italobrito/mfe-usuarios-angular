import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesDefaultAbstractComponent } from './pages-default-abstract.component';

@Component({
  selector: 'pages-create-update-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesCreateUpdateAbstractComponent extends PagesDefaultAbstractComponent {
  abstract persistirDados(): void;

  solicitarPersistencia(): void {
    this.componente.ativarValidacoes();
    if (this.componente._formulario.valid) {
      this.persistirDados();
    } else {
      this.notificador.adicionarMensagem('Atenção', 'O formulário está incompleto', 'atenção');
    }
  }
  
  override confirmouAcaoModal() {
    this.abrirFecharModal();
    this.solicitarPersistencia();
  }
}
