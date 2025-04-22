import { NgModule } from "@angular/core";

import { DeletarUsuarioUseCase } from "@application/use-cases/deletar-usuario.use-case";

import { CrudUsuarioRepository } from "@repositories/crud-usuario-mock.repository";

import { DeletarUsuarioControllerService } from "@controllers/deletar-usuario-controller.service";
import { DELETAR_USUARIO_CONTROLLER } from "@controllers/interfaces/deletar-usuario-controller.interface";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { DELETAR_USUARIO_USE_CASE } from "@domain/interfaces/use-cases/deletar-usuario.use-case.interface";

@NgModule({
    providers: [
      { provide: DELETAR_USUARIO_CONTROLLER, useClass: DeletarUsuarioControllerService },
      { provide: DELETAR_USUARIO_USE_CASE, useClass: DeletarUsuarioUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioRepository },
    ],
  })
  export class DeletarProvidersModule {}
