import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesDefaultAbstractComponent } from './pages-default-abstract.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pages-read-delete-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesDeleteAbstractComponent extends PagesDefaultAbstractComponent {
  
  protected router: ActivatedRoute = inject(ActivatedRoute);

  _formularioCarregado: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.carregarDados();
      this._formularioCarregado = true;
    },500)
  }

  abstract persistirDados(): void;

  solicitarPersistencia(): void {
    if (this._formularioCarregado) {
      this.persistirDados();
    } else {
      this.notificador.adicionarMensagem('Atenção', 'O formulário não foi carregado.', 'atenção');
    }
  }

  override confirmouAcaoModal() {
    this.abrirFecharModal();
    this.solicitarPersistencia();
  }
}
