import { Injectable } from '@angular/core';

import { UsuarioRepositoryInterface } from '../../domain/interfaces/repositories/usuario-repository.interface';
import { DeletarUsuarioUseCaseInterface } from '../../domain/interfaces/use-cases/deletar-usuario.use-case.interface';

@Injectable({
    providedIn: 'root'
})
export class DeletarUsuarioUseCase implements DeletarUsuarioUseCaseInterface {

    constructor(
        private usuarioRepository: UsuarioRepositoryInterface,
    ) { }

    deletar(usuarioId: number): Promise<any> {
        return this.usuarioRepository.deletar(usuarioId);
    }
}
