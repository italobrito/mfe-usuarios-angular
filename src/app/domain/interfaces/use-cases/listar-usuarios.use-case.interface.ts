import { InjectionToken } from "@angular/core";

import { Usuario } from "@entities/usuario";

export interface ListarUsuariosUseCaseInterface {
    listar(): Promise<Usuario[]>;
}

export const LISTAR_USUARIOS_USE_CASE = new InjectionToken<ListarUsuariosUseCaseInterface>(
    'ListarUsuariosUseCaseInterface'
);
