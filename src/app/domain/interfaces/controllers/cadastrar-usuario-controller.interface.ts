import { InjectionToken } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

export interface CadastrarUsuarioControllerInterface {
  cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}

export const CADASTRAR_USUARIO_CONTROLLER = new InjectionToken<CadastrarUsuarioControllerInterface>(
  'CadastrarUsuarioControllerInterface'
);
