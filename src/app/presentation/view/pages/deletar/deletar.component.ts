import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent
  ],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent extends PagesAbstractComponent {
  override persistirDados(): void {
    console.log('DeletarComponent persistirDados', this.componente._formulario.getRawValue());
  }
}
