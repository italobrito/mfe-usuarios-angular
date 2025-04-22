import { InjectionToken } from "@angular/core";

import { UsuarioFormulario } from "@entities/usuario";

export interface AtualizarUsuarioControllerInterface {
  atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}

export const ATUALIZAR_USUARIO_CONTROLLER = new InjectionToken<AtualizarUsuarioControllerInterface>(
  'AtualizarUsuarioControllerInterface'
);
