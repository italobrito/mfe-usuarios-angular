import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from 'src/app/presentation/ui/shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from 'src/app/presentation/ui/shared/components/forms/pages-abstract-component';
import { NotificadorMensagensComponent } from 'src/app/presentation/ui/shared/components/notificador-mensagens/notificador-mensagens.component';

import { CADASTRAR_USUARIO_CONTROLLER, CadastrarUsuarioControllerInterface } from 'src/app/presentation/controllers/interfaces/cadastrar-usuario-controller.interface';
import { CadastrarUsuarioControllerService } from 'src/app/presentation/controllers/cadastrar-usuario-controller.service';
import { CADASTRAR_USUARIO_USE_CASE } from 'src/app/domain/interfaces/use-cases/cadastrar-usuario.use-case.interface';
import { CadastrarUsuarioUseCase } from 'src/app/application/use-cases/cadastrar-usuario.use-case';
import { CrudUsuarioRepository } from 'src/app/data/repositories/crud-usuario-mock.repository';
import { USUARIO_REPOSITORY } from 'src/app/domain/interfaces/repositories/usuario-repository.interface';
import { UsuarioFormulario } from '@entities/usuario';


@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent
  ],
  providers: [
    { provide: CADASTRAR_USUARIO_CONTROLLER, useClass: CadastrarUsuarioControllerService },
    { provide: CADASTRAR_USUARIO_USE_CASE, useClass: CadastrarUsuarioUseCase },
    { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioRepository }
  ],
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
    console.log('CadastrarComponent this.componente._formulario.getRawValue(); = ', this.componente._formulario.getRawValue());

    this.usuarioController.cadastrar(this.componente._formulario.getRawValue()).then((usuario: UsuarioFormulario) => {
      this.notificador.adicionarMensagem('Sucesso', `Usuário ${usuario.id} cadastro com sucesso.`, 'sucesso');
      this.componente.habilitarDesabilitarFormulario();
    }).catch(error => {
      this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
    });
  }
}
