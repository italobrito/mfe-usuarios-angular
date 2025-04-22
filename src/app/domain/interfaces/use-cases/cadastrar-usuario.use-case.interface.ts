import { InjectionToken } from "@angular/core";
import { UsuarioFormulario } from "@entities/usuario";

export interface CadastrarUsuarioUseCaseInterface {
    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}

export const CADASTRAR_USUARIO_USE_CASE = new InjectionToken<CadastrarUsuarioUseCaseInterface>(
    'CadastrarUsuarioUseCaseInterface'
  );