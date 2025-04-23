import { InjectionToken } from "@angular/core";

import { Usuario } from "@entities/usuario";

export interface ListarUsuariosControllerInterface {
  listar(): Promise<Array<Usuario>>;
}

export const LISTAR_USUARIOS_CONTROLLER = new InjectionToken<ListarUsuariosControllerInterface>(
  'ListarUsuariosControllerInterface'
);
