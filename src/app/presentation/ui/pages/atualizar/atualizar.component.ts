// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { InformacoesUsuarioComponent } from '@ui/shared/components/forms/informacoes-usuario/informacoes-usuario.component';
// import { NotificadorMensagensComponent } from '@ui/shared/components/notificador-mensagens/notificador-mensagens.component';

// import { PagesCreateUpdateAbstractComponent } from '@shared/components/forms/abstracts-components/pages-create-update-abstract.component';

// @Component({
//   selector: 'app-atualizar-usuario',
//   standalone: true,
//   imports: [
//     CommonModule,
//     InformacoesUsuarioComponent,
//     NotificadorMensagensComponent
//   ],
//   templateUrl: './atualizar.component.html',
// })
// export class AtualizarComponent extends PagesCreateUpdateAbstractComponent {
//   // private usuarioController: CadastrarUsuarioControllerInterface = inject(CADASTRAR_USUARIO_CONTROLLER);

    
//     habilitarForm() {
//       this.componente.habilitarDesabilitarFormulario();
//     }
  
//     persistirDados(): void {
//       this.usuarioController.cadastrar(this.componente._formulario.getRawValue()).then((usuario: UsuarioFormulario) => {
//         this.notificador.adicionarMensagem('Sucesso', `Usuário ${usuario.id} cadastro com sucesso.`, 'sucesso');
//         this.componente.habilitarDesabilitarFormulario();
//         this._habilitarBotaoPersistir = false
//       }).catch(error => {
//         this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
//       });
//     }
// }
