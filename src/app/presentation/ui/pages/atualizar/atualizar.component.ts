import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { ATUALIZAR_USUARIO_CONTROLLER, AtualizarUsuarioControllerInterface, AtualizarUsuarioProvidersModule, BtnAtualizarDirective, BtnVoltarDirective, BUSCAR_USUARIO_POR_ID_CONTROLLER, BuscarUsuarioPorIdControllerInterface, BuscarUsuarioPorIdProvidersModule, ModalComponent, NotificadorMensagensComponent, PagesCreateUpdateAbstractComponent } from 'shared-forms';
import { UsuarioFormulario } from 'shared-forms/lib/domain/entities/usuario';

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
        BtnAtualizarDirective,
        BtnVoltarDirective
    ],
    templateUrl: './atualizar.component.html',
})
export class AtualizarComponent extends PagesCreateUpdateAbstractComponent<InformacoesUsuarioComponent> {
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
