import { inject, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { PagesDeleteAbstractComponent } from '@shared/components/forms/abstracts-components/pages-delete-abstract.component';
import { ModalComponent } from '@shared/components/modal/modal.component';

import { DELETAR_USUARIO_CONTROLLER, DeletarUsuarioControllerInterface } from '@controllers/interfaces/deletar-usuario-controller.interface';

import { DeletarProvidersModule } from './deletar-providers.module';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    DeletarProvidersModule,
    ModalComponent
  ],
  providers: [DeletarProvidersModule],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent extends PagesDeleteAbstractComponent {
  private usuarioController: DeletarUsuarioControllerInterface = inject(DELETAR_USUARIO_CONTROLLER);

  persistirDados(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioController.deletar(+id).then(() => {
        this.notificador.adicionarMensagem('Atenção', `Usuário ${id} deletado com sucesso`, 'atenção');
        this._habilitarBotaoPersistir = false
      }).catch(error => {
        this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
      });
    }
  }
}
