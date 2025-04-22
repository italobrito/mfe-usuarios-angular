import { InjectionToken } from '@angular/core';

export interface DeletarUsuarioUseCaseInterface {
    deletar(id: number): Promise<void>;
}

export const DELETAR_USUARIO_USE_CASE = new InjectionToken<DeletarUsuarioUseCaseInterface>(
    'DeletarUsuarioUseCaseInterface'
);
