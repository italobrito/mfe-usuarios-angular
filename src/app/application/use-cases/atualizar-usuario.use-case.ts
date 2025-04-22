import { Injectable } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';
import { UsuarioRepositoryInterface } from '../../domain/interfaces/repositories/usuario-repository.interface';
import { AtualizarUsuarioUseCaseInterface } from '../../domain/interfaces/use-cases/atualizar-usuario.use-case.interface';

@Injectable({
    providedIn: 'root'
})
export class AtualizarUsuarioUseCase implements AtualizarUsuarioUseCaseInterface {

    constructor(
        private usuarioRepository: UsuarioRepositoryInterface,
    ) { }

    atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        return this.usuarioRepository.atualizar(usuario);
    }
}
