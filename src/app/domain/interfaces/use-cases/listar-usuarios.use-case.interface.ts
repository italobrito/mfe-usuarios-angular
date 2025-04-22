import { Usuario } from "@entities/usuario";

export interface ListarUsuariosUseCaseInterface {
    listar(): Promise<Array<Usuario>>;
}
