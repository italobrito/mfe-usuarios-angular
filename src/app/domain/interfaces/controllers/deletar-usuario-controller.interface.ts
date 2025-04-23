import { InjectionToken } from "@angular/core";

export interface DeletarUsuarioControllerInterface {
  deletar(id: number): Promise<void>;
}

export const DELETAR_USUARIO_CONTROLLER = new InjectionToken<DeletarUsuarioControllerInterface>(
  'DeletarUsuarioControllerInterface'
);
