import { InjectionToken } from "@angular/core";

import { UsuarioFormulario } from "@entities/usuario";

export interface BuscarUsuarioPorIdUseCaseInterface {
    buscarPorId(id: number): Promise<UsuarioFormulario>;
}

export const BUSCAR_USUARIO_POR_ID_USE_CASE = new InjectionToken<BuscarUsuarioPorIdUseCaseInterface>(
    'BuscarUsuarioPorIdUseCaseInterface'
);
