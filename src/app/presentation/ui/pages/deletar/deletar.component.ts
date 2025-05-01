import { inject, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { BtnDeletarDirective, BtnVoltarDirective, BUSCAR_USUARIO_POR_ID_CONTROLLER, BuscarUsuarioPorIdControllerInterface, BuscarUsuarioPorIdProvidersModule, DELETAR_USUARIO_CONTROLLER, DeletarUsuarioControllerInterface, DeletarUsuarioProvidersModule, ModalComponent, NotificadorMensagensComponent, PagesDeleteAbstractComponent } from 'shared-forms';
import { UsuarioFormulario } from 'shared-forms/lib/domain/entities/usuario';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    DeletarUsuarioProvidersModule,
    BuscarUsuarioPorIdProvidersModule,
    ModalComponent,
    BtnDeletarDirective,
    BtnVoltarDirective
  ],
  providers: [DeletarUsuarioProvidersModule],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent extends PagesDeleteAbstractComponent<InformacoesUsuarioComponent> {
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
