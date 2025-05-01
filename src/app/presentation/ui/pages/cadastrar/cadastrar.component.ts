import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { BtnCadastrarDirective, BtnVoltarDirective, CADASTRAR_USUARIO_CONTROLLER, CadastrarUsuarioControllerInterface, CadastrarUsuarioProvidersModule, ModalComponent, NotificadorMensagensComponent, PagesCreateUpdateAbstractComponent } from 'shared-forms';
import { UsuarioFormulario } from 'shared-forms/lib/domain/entities/usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    ModalComponent,
    CadastrarUsuarioProvidersModule,
    BtnCadastrarDirective,
    BtnVoltarDirective
  ],
  providers: [CadastrarUsuarioProvidersModule],
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent extends PagesCreateUpdateAbstractComponent<InformacoesUsuarioComponent> implements OnInit {
  private usuarioController: CadastrarUsuarioControllerInterface = inject(CADASTRAR_USUARIO_CONTROLLER);

  ngOnInit(): void {
    setTimeout(() => {
      this.componente.habilitarDesabilitarFormulario();
    }, 500);
  }

  persistirDados(): void {
    this.usuarioController.cadastrar(this.componente._formulario.getRawValue()).then((usuario: UsuarioFormulario) => {
      this.notificador.adicionarMensagem('Sucesso', `Usuário ${usuario.id} cadastro com sucesso.`, 'sucesso');
      this.componente.habilitarDesabilitarFormulario();
      this._habilitarBotaoPersistir = false
    }).catch(error => {
      this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
    });
  }
}
