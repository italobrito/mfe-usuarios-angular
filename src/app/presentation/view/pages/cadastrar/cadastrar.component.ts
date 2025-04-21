import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent
  ],
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent extends PagesAbstractComponent {
  override persistirDados(): void {
    console.log('CadastrarComponent persistirDados', this.componente._formulario.getRawValue());
  }
}
