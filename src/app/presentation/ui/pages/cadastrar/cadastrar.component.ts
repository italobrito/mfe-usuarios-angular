import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';

import { CADASTRAR_USUARIO_CONTROLLER, CadastrarUsuarioControllerInterface } from '@controllers/interfaces/cadastrar-usuario-controller.interface';

import { UsuarioFormulario } from '@entities/usuario';

import { CadastrarProvidersModule } from './cadastrar-providers.module';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    CadastrarProvidersModule
  ],
  providers: [CadastrarProvidersModule],
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent extends PagesAbstractComponent implements OnInit {
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
      this._habilitarBotaoSalvar = false
    }).catch(error => {
      this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
    });
  }
}
