import { Injectable, Inject } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

import { AtualizarUsuarioControllerInterface } from './interfaces/atualizar-usuario-controller.interface';
import { ATUALIZAR_USUARIO_USE_CASE, AtualizarUsuarioUseCaseInterface } from '@domain/interfaces/use-cases/atualizar-usuario.use-case.interface';

@Injectable({
  providedIn: 'root',
})
export class AtualizarUsuarioControllerService implements AtualizarUsuarioControllerInterface {
  constructor(
    @Inject(ATUALIZAR_USUARIO_USE_CASE) private atualizarUsuarioUseCase: AtualizarUsuarioUseCaseInterface
  ) {}

  atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    return this.atualizarUsuarioUseCase.atualizar(usuario);
  }
}