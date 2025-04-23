import { InjectionToken } from "@angular/core";

import { UsuarioFormulario } from "@entities/usuario";

export interface BuscarUsuarioPorIdControllerInterface {
  buscarPorId(id: number): Promise<UsuarioFormulario>;
}

export const BUSCAR_USUARIO_POR_ID_CONTROLLER = new InjectionToken<BuscarUsuarioPorIdControllerInterface>(
  'BuscarUsuarioPorIdControllerInterface'
);
