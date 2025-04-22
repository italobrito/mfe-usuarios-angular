import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from 'src/app/presentation/ui/shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from 'src/app/presentation/ui/shared/components/forms/pages-abstract-component';
import { NotificadorMensagensComponent } from 'src/app/presentation/ui/shared/components/notificador-mensagens/notificador-mensagens.component';

@Component({
  selector: 'app-atualizar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent
  ],
  templateUrl: './atualizar.component.html',
})
export class AtualizarComponent extends PagesAbstractComponent {
  override persistirDados(): void {
    console.log('AtualizarComponent this.componente._formulario.getRawValue(); = ',this.componente._formulario.getRawValue());
  }
}
