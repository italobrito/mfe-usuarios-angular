import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { ModalComponent } from '@shared/components/modal/modal.component';

import { PagesCreateUpdateAbstractComponent } from '@shared/components/forms/abstracts-components/pages-create-update-abstract.component';

import { AtualizarUsuarioProvidersModule } from '@shared/providers/atualizar-usuario-providers.module';
import { BuscarUsuarioPorIdProvidersModule } from '@shared/providers/buscar-usuario-por-id-providers.module';

import { ATUALIZAR_USUARIO_CONTROLLER, AtualizarUsuarioControllerInterface } from '@domain/interfaces/controllers/atualizar-usuario-controller.interface';
import { BUSCAR_USUARIO_POR_ID_CONTROLLER, BuscarUsuarioPorIdControllerInterface } from '@domain/interfaces/controllers/buscar-usuario-por-id-controller.interface';

import { UsuarioFormulario } from '@entities/usuario';

@Component({
    selector: 'app-atualizar-usuario',
    standalone: true,
    imports: [
        CommonModule,
        InformacoesUsuarioComponent,
        NotificadorMensagensComponent,
        ModalComponent,
        AtualizarUsuarioProvidersModule,
        BuscarUsuarioPorIdProvidersModule,
    ],
    templateUrl: './atualizar.component.html',
})
export class AtualizarComponent extends PagesCreateUpdateAbstractComponent {
    private usuarioController: AtualizarUsuarioControllerInterface = inject(ATUALIZAR_USUARIO_CONTROLLER);
    private buscarUsuarioPorId: BuscarUsuarioPorIdControllerInterface = inject(BUSCAR_USUARIO_POR_ID_CONTROLLER);
    protected router: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        setTimeout(() => {
            this.carregarDados();
        }, 500)
    }

    habilitarForm() {
        this.componente.habilitarDesabilitarFormulario();
        this._habilitarBotaoPersistir = !this._habilitarBotaoPersistir;
    }

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
            this.usuarioController.atualizar(+id, this.componente._formulario.value).then(() => {
                this.notificador.adicionarMensagem('Atenção', `Usuário ${id} atualizado com sucesso`, 'sucesso');
                this.componente.habilitarDesabilitarFormulario();
                this._habilitarBotaoPersistir = !this._habilitarBotaoPersistir;
            }).catch(error => {
                this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
            });
        }
    }
}
