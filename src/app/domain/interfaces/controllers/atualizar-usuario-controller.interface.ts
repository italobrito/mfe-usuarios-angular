import { InjectionToken } from "@angular/core";

import { UsuarioFormulario } from "@entities/usuario";

export interface AtualizarUsuarioControllerInterface {
  atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}

export const ATUALIZAR_USUARIO_CONTROLLER = new InjectionToken<AtualizarUsuarioControllerInterface>(
  'AtualizarUsuarioControllerInterface'
);
