import { InjectionToken } from "@angular/core";

import { UsuarioFormulario } from "@entities/usuario";

export interface AtualizarUsuarioUseCaseInterface {
    atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}

export const ATUALIZAR_USUARIO_USE_CASE = new InjectionToken<AtualizarUsuarioUseCaseInterface>(
    'AtualizarUsuarioUseCaseInterface'
);
