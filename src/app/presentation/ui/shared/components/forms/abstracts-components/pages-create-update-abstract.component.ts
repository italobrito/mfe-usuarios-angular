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
    console.log('this.componente._formulario.valid = ', this.componente._formulario.valid);
    console.log('this.componente._formulario.getRawValue() = ', this.componente._formulario.getRawValue());
    console.log('this.componente._formulario.getRawValue() = ', this.componente._formulario);
    if (this.componente._formulario.valid) {
      this.persistirDados();
    } else {
      this.notificador.adicionarMensagem('Atenção', 'O formulário está incompleto', 'atenção');
    }
  }
}
