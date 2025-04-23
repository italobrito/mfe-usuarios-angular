import { NgModule } from "@angular/core";

import { CadastrarUsuarioControllerService } from "@controllers/cadastrar-usuario-controller.service";
import { CADASTRAR_USUARIO_CONTROLLER } from "@domain/interfaces/controllers/cadastrar-usuario-controller.interface";

import { CADASTRAR_USUARIO_USE_CASE } from "@domain/interfaces/use-cases/cadastrar-usuario.use-case.interface";
import { CadastrarUsuarioUseCase } from "@application/use-cases/cadastrar-usuario.use-case";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "@repositories/crud-usuario-mock.repository";

@NgModule({
    providers: [
      { provide: CADASTRAR_USUARIO_CONTROLLER, useClass: CadastrarUsuarioControllerService },
      { provide: CADASTRAR_USUARIO_USE_CASE, useClass: CadastrarUsuarioUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
    ],
  })
  export class CadastrarUsuarioProvidersModule {}