import { Inject, Injectable } from '@angular/core';

import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '@domain/interfaces/repositories/usuario-repository.interface';
import { ListarUsuariosUseCaseInterface } from '@domain/interfaces/use-cases/listar-usuarios.use-case.interface';

import { Usuario } from '@entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class ListarUsuariosUseCase implements ListarUsuariosUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    listar(): Promise<Usuario[]> {
        return this.usuarioRepository.listar();
    }
}
