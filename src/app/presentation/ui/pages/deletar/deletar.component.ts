import { inject, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { PagesDeleteAbstractComponent } from '@shared/components/forms/abstracts-components/pages-delete-abstract.component';
import { ModalComponent } from '@shared/components/modal/modal.component';

import { DELETAR_USUARIO_CONTROLLER, DeletarUsuarioControllerInterface } from '@controllers/interfaces/deletar-usuario-controller.interface';
import { BUSCAR_USUARIO_POR_ID_CONTROLLER, BuscarUsuarioPorIdControllerInterface } from '@controllers/interfaces/buscar-usuario-por-id-controller.interface';

import { DeletarUsuarioProvidersModule } from '@shared/providers/deletar-usuario-providers.module';
import { BuscarUsuarioPorIdProvidersModule } from '@shared/providers/buscar-usuario-por-id-providers.module';

import { UsuarioFormulario } from '@entities/usuario';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    DeletarUsuarioProvidersModule,
    BuscarUsuarioPorIdProvidersModule,
    ModalComponent
  ],
  providers: [DeletarUsuarioProvidersModule],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent extends PagesDeleteAbstractComponent {
  private deletarUsuario: DeletarUsuarioControllerInterface = inject(DELETAR_USUARIO_CONTROLLER);
  private buscarUsuarioPorId: BuscarUsuarioPorIdControllerInterface = inject(BUSCAR_USUARIO_POR_ID_CONTROLLER);

  carregarDados(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.buscarUsuarioPorId.buscarPorId(+id).then((usuario: UsuarioFormulario) => {
        this.componente._formulario.patchValue(usuario);
      }).catch(error => {
        this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
      });
    }
  }

  persistirDados(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.deletarUsuario.deletar(+id).then(() => {
        this.notificador.adicionarMensagem('Atenção', `Usuário ${id} deletado com sucesso`, 'atenção');
        this._habilitarBotaoPersistir = false
      }).catch(error => {
        this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
      });
    }
  }
}
