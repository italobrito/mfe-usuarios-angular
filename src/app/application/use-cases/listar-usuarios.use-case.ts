import { Injectable } from '@angular/core';

import { UsuarioRepositoryInterface } from '../../domain/interfaces/repositories/usuario-repository.interface';
import { ListarUsuariosUseCaseInterface } from '../../domain/interfaces/use-cases/listar-usuarios.use-case.interface';
import { Usuario } from '@entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class ListarUsuariosUseCase implements ListarUsuariosUseCaseInterface {

    constructor(
        private usuarioRepository: UsuarioRepositoryInterface,
    ) { }

    listar(): Promise<Array<Usuario>> {
        return this.usuarioRepository.listar();
    }
}
