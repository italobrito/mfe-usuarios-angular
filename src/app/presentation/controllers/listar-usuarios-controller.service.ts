import { Injectable, Inject } from '@angular/core';

import { Usuario } from '@entities/usuario';

import { ListarUsuariosControllerInterface } from './interfaces/listar-usuario-controller.interface';
import { LISTAR_USUARIOS_USE_CASE, ListarUsuariosUseCaseInterface } from '@domain/interfaces/use-cases/listar-usuarios.use-case.interface';

@Injectable({
  providedIn: 'root',
})
export class ListarUsuariosControllerService implements ListarUsuariosControllerInterface {
  constructor(
    @Inject(LISTAR_USUARIOS_USE_CASE) private listarUsuariosUseCase: ListarUsuariosUseCaseInterface
  ) { }

  listar(): Promise<Array<Usuario>> {
    return this.listarUsuariosUseCase.listar();
  }
}