import { Injectable, Inject } from '@angular/core';

import { DeletarUsuarioControllerInterface } from '@domain/interfaces/controllers/deletar-usuario-controller.interface';
import { DELETAR_USUARIO_USE_CASE, DeletarUsuarioUseCaseInterface } from '@domain/interfaces/use-cases/deletar-usuario.use-case.interface';

@Injectable({
  providedIn: 'root',
})
export class DeletarUsuarioControllerService implements DeletarUsuarioControllerInterface {
  constructor(
    @Inject(DELETAR_USUARIO_USE_CASE) private deletarUsuarioUseCase: DeletarUsuarioUseCaseInterface
  ) {}

  deletar(id: number): Promise<void> {
    return this.deletarUsuarioUseCase.deletar(id);
  }
}