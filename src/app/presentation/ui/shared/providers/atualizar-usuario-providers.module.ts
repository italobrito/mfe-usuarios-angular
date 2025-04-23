import { NgModule } from "@angular/core";

import { AtualizarUsuarioUseCase } from "@application/use-cases/atualizar-usuario.use-case";
import { ATUALIZAR_USUARIO_USE_CASE } from "@domain/interfaces/use-cases/atualizar-usuario.use-case.interface";

import { AtualizarUsuarioControllerService } from "@controllers/atualizar-usuario-controller.service";
import { ATUALIZAR_USUARIO_CONTROLLER } from "@controllers/interfaces/atualizar-usuario-controller.interface";

import { USUARIO_REPOSITORY } from "@domain/interfaces/repositories/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "@repositories/crud-usuario-mock.repository";

@NgModule({
  providers: [
    { provide: ATUALIZAR_USUARIO_CONTROLLER, useClass: AtualizarUsuarioControllerService },
    { provide: ATUALIZAR_USUARIO_USE_CASE, useClass: AtualizarUsuarioUseCase },
    { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
  ],
})
export class AtualizarUsuarioProvidersModule {}