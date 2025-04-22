import { UsuarioFormulario } from "@entities/usuario";

export interface AtualizarUsuarioUseCaseInterface {
    atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario>;
}
