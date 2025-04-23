import { NgModule } from "@angular/core";

import { BuscarUsuarioPorIdUseCase } from "@application/use-cases/buscar-usuario-por-id.use-case";
import { BUSCAR_USUARIO_POR_ID_USE_CASE } from "@domain/interfaces/use-cases/buscar-usuario-por-id.use-case.interface";

import { BuscarUsuarioPorIdControllerService } from "@controllers/buscar-usuario-por-id-controller.service";
import { BUSCAR_USUARIO_POR_ID_CONTROLLER } from "@controllers/interfaces/buscar-usuario-por-id-controller.interface";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "@repositories/crud-usuario-mock.repository";

@NgModule({
    providers: [
      { provide: BUSCAR_USUARIO_POR_ID_CONTROLLER, useClass: BuscarUsuarioPorIdControllerService },
      { provide: BUSCAR_USUARIO_POR_ID_USE_CASE, useClass: BuscarUsuarioPorIdUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
    ],
  })
  export class BuscarUsuarioPorIdProvidersModule {}
