import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesDefaultAbstractComponent } from './pages-default-abstract.component';

@Component({
  selector: 'pages-read-delete-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesDeleteAbstractComponent extends PagesDefaultAbstractComponent {
  
  _formularioCarregado: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.carregarDados();
      this._formularioCarregado = true;
    },500)
  }

  abstract persistirDados(): void;

  solicitarPersistencia(): void {
    this.componente.ativarValidacoes();
    console.log('this.componente._formulario.valid = ', this.componente._formulario.valid);
    console.log('this.componente._formulario.getRawValue() = ', this.componente._formulario.getRawValue());
    console.log('this.componente._formulario.getRawValue() = ', this.componente._formulario);
    if (this._formularioCarregado) {
      this.persistirDados();
    } else {
      this.notificador.adicionarMensagem('Atenção', 'O formulário está incompleto', 'atenção');
    }
  }

}
