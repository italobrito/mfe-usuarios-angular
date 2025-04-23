import { Injectable, Inject } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

import { BUSCAR_USUARIO_POR_ID_USE_CASE, BuscarUsuarioPorIdUseCaseInterface } from '@domain/interfaces/use-cases/buscar-usuario-por-id.use-case.interface';
import { BuscarUsuarioPorIdControllerInterface } from '@domain/interfaces/controllers/buscar-usuario-por-id-controller.interface';

@Injectable({
  providedIn: 'root',
})
export class BuscarUsuarioPorIdControllerService implements BuscarUsuarioPorIdControllerInterface {
  constructor(
    @Inject(BUSCAR_USUARIO_POR_ID_USE_CASE) private buscarUsuarioPorId: BuscarUsuarioPorIdUseCaseInterface
  ) { }

  buscarPorId(id: number): Promise<UsuarioFormulario> {
    return this.buscarUsuarioPorId.buscarPorId(id);
  }
}