import { NgModule } from "@angular/core";

import { LISTAR_USUARIOS_CONTROLLER } from "@domain/interfaces/controllers/listar-usuario-controller.interface";
import { ListarUsuariosControllerService } from "@controllers/listar-usuarios-controller.service";

import { LISTAR_USUARIOS_USE_CASE } from "@domain/interfaces/use-cases/listar-usuarios.use-case.interface";
import { ListarUsuariosUseCase } from "@application/use-cases/listar-usuarios.use-case";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "@repositories/crud-usuario-mock.repository";

@NgModule({
    providers: [
      { provide: LISTAR_USUARIOS_CONTROLLER, useClass: ListarUsuariosControllerService },
      { provide: LISTAR_USUARIOS_USE_CASE, useClass: ListarUsuariosUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
    ],
  })
  export class ListarUsuariosProvidersModule {}
