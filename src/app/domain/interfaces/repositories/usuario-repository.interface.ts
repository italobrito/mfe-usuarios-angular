import { InjectionToken } from "@angular/core";
import { Usuario, UsuarioFormulario } from "@entities/usuario";

export interface UsuarioRepositoryInterface {
    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
    atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
    deletar(userId: number): Promise<void>;
    listar(): Promise<Usuario[]>;
}

export const USUARIO_REPOSITORY = new InjectionToken<UsuarioRepositoryInterface>(
    'UsuarioRepositoryInterface'
  );