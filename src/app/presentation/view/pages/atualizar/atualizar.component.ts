import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';

@Component({
  selector: 'app-atualizar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent
  ],
  templateUrl: './atualizar.component.html',
})
export class AtualizarComponent extends PagesAbstractComponent {
  override persistirDados(): void {
    console.log('AtualizarComponent persistirDados', this.componente._formulario.getRawValue());
  }
}
