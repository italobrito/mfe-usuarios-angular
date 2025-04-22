import { inject, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';

import { DELETAR_USUARIO_CONTROLLER, DeletarUsuarioControllerInterface } from '@controllers/interfaces/deletar-usuario-controller.interface';

import { DeletarProvidersModule } from './deletar-providers.module';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    DeletarProvidersModule
  ],
  providers: [DeletarProvidersModule],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent extends PagesAbstractComponent {
  private usuarioController: DeletarUsuarioControllerInterface = inject(DELETAR_USUARIO_CONTROLLER);

  persistirDados(): void {
    // this.componente.habilitarDesabilitarFormulario();
    console.log('DeletarComponent this.componente._formulario.getRawValue(); = ', this.componente._formulario.getRawValue());
    this.usuarioController.deletar(1).then(() => {
      console.log('Usuário deletado com sucesso!');
      this._habilitarBotaoSalvar = false
    }).catch(error => {
      console.error('Erro ao deletar usuário:', error);
    });
  }
}
