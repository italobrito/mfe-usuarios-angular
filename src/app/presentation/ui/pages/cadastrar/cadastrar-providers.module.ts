import { NgModule } from "@angular/core";

import { CadastrarUsuarioUseCase } from "@application/use-cases/cadastrar-usuario.use-case";

import { CrudUsuarioRepository } from "@repositories/crud-usuario-mock.repository";

import { CadastrarUsuarioControllerService } from "@controllers/cadastrar-usuario-controller.service";
import { CADASTRAR_USUARIO_CONTROLLER } from "@controllers/interfaces/cadastrar-usuario-controller.interface";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { CADASTRAR_USUARIO_USE_CASE } from "@domain/interfaces/use-cases/cadastrar-usuario.use-case.interface";

@NgModule({
    providers: [
      { provide: CADASTRAR_USUARIO_CONTROLLER, useClass: CadastrarUsuarioControllerService },
      { provide: CADASTRAR_USUARIO_USE_CASE, useClass: CadastrarUsuarioUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioRepository },
    ],
  })
  export class CadastrarProvidersModule {}