import { Injectable, Inject } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

import { AtualizarUsuarioControllerInterface } from '@domain/interfaces/controllers/atualizar-usuario-controller.interface';
import { ATUALIZAR_USUARIO_USE_CASE, AtualizarUsuarioUseCaseInterface } from '@domain/interfaces/use-cases/atualizar-usuario.use-case.interface';

@Injectable({
  providedIn: 'root',
})
export class AtualizarUsuarioControllerService implements AtualizarUsuarioControllerInterface {
  constructor(
    @Inject(ATUALIZAR_USUARIO_USE_CASE) private atualizarUsuarioUseCase: AtualizarUsuarioUseCaseInterface
  ) {}

  atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    return this.atualizarUsuarioUseCase.atualizar(id, usuario);
  }
}