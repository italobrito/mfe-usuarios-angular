import { Inject, Injectable } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '@domain/interfaces/repositories/usuario-repository.interface';
import { AtualizarUsuarioUseCaseInterface } from '@domain/interfaces/use-cases/atualizar-usuario.use-case.interface';

@Injectable({
    providedIn: 'root'
})
export class AtualizarUsuarioUseCase implements AtualizarUsuarioUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        return this.usuarioRepository.atualizar(id, usuario);
    }
}
