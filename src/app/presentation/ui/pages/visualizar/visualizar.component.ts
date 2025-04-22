import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { InformacoesUsuarioComponent } from 'src/app/presentation/ui/shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from 'src/app/presentation/ui/shared/components/forms/pages-abstract-component';

@Component({
  selector: 'app-visualizar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent
  ],
  templateUrl: './visualizar.component.html',
})
export class VisualizarComponent extends PagesAbstractComponent {
  persistirDados(): void {
    console.log('visualizarComponent persistirDados', this.componente._formulario.getRawValue());
  }
}
