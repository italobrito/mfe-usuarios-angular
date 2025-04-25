import { Injectable } from '@angular/core';

import { Usuario, UsuarioFormulario } from '@domain/entities/usuario';
import { UsuarioRepositoryInterface } from '@domain/interfaces/repositories/usuario-repository.interface';

@Injectable({ providedIn: 'root' })
export class CrudUsuarioMockRepository implements UsuarioRepositoryInterface {

  private usuarios: Usuario[] = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', tipoUsuario: 'A', status: 'A' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', tipoUsuario: 'C', status: 'I' },
    { id: 3, nome: 'Carlos Souza', email: 'carlos@email.com', tipoUsuario: 'A', status: 'A' },
  ];

  private usuariosFormulario: UsuarioFormulario[] = [
    {
      id: 1,
      informacoesPessoais: {
        nomeCompleto: 'Ítalo Pereira de Brito',
        genero: 'M',
        email: 'pbitalo@hotmail.com',
        telefone: '(11) 9 7891 1354)',
        dataNascimento: '15/04/1987',
        cpf: '057.847.334-86',
        rg: '165165',
      },
      endereco: {
        rua: 'Praça da Liberdade',
        numero: '789',
        complemento: 'Apto 101',
        bairro: 'Centro',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30001-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'C',
        status: 'A',
        cargo: 'Gerente',
        dataAdmissao: '15/04/1987',
        setor: 'Contabilidade',
        temaPreferido: 'P',
      },
      avatar: 'dasdadas',
    },
    {
      id: 2,
      informacoesPessoais: {
        nomeCompleto: 'Maria Clara Oliveira',
        genero: 'F',
        email: 'maria.clara@gmail.com',
        telefone: '(21) 9 9876 5432',
        dataNascimento: '10/08/1990',
        cpf: '057.847.334-86',
        rg: '987654321',
      },
      endereco: {
        rua: 'Rua das Palmeiras',
        numero: '456',
        complemento: 'Casa',
        bairro: 'Jardim Botânico',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22470-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'C',
        status: 'A',
        cargo: 'Analista de Recursos Humanos',
        dataAdmissao: '15/04/1987',
        setor: 'Recursos Humanos',
        temaPreferido: 'P',
      },
      avatar: 'avatar2.png',
    },
    {
      id: 3,
      informacoesPessoais: {
        nomeCompleto: 'Carlos Eduardo Silva',
        genero: 'M',
        email: 'carlos.eduardo@gmail.com',
        telefone: '(31) 9 8765 4321',
        dataNascimento: '25/12/1985',
        cpf: '057.847.334-86',
        rg: '123456789',
      },
      endereco: {
        rua: 'Avenida Afonso Pena',
        numero: '1234',
        complemento: 'Sala 202',
        bairro: 'Funcionários',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30130-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'A',
        status: 'A',
        cargo: 'Coordenador de Projetos',
        dataAdmissao: '15/04/1987',
        setor: 'TI',
        temaPreferido: 'P',
      },
      avatar: 'avatar3.png',
    },
    {
      id: 4,
      informacoesPessoais: {
        nomeCompleto: 'Ana Beatriz Santos',
        genero: 'F',
        email: 'ana.beatriz@gmail.com',
        telefone: '(41) 9 7654 3210',
        dataNascimento: '05/06/1995',
        cpf: '057.847.334-86',
        rg: '654321987',
      },
      endereco: {
        rua: 'Rua XV de Novembro',
        numero: '789',
        complemento: 'Cobertura',
        bairro: 'Centro',
        cidade: 'Curitiba',
        estado: 'PR',
        cep: '80020-310',
      },
      informacoesProfissionais: {
        tipoUsuario: 'C',
        status: 'I',
        cargo: 'Especialista em Marketing',
        dataAdmissao: '15/04/1987',
        setor: 'Marketing',
        temaPreferido: 'P',
      },
      avatar: 'avatar4.png',
    },
  ];

  cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    usuario.id = this.usuariosFormulario.length + 1;
    this.usuariosFormulario.push(usuario);
    return Promise.resolve(usuario);
  }

  atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    const index = this.usuariosFormulario.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.usuariosFormulario[index] = usuario;
      return Promise.resolve(usuario);
    }
    return Promise.reject(new Error('Usuário não encontrado'));
  }

  deletar(usuarioId: number): Promise<void> {
    const index = this.usuariosFormulario.findIndex((u) => u.id === usuarioId);
    if (index !== -1) {
      this.usuariosFormulario.splice(index, 1);
      console.log(this.usuariosFormulario);
      return Promise.resolve();
    }
    return Promise.reject(new Error('Usuário não encontrado'));
  }

  listar(): Promise<Usuario[]> {
    return Promise.resolve(this.usuarios);
  }

  buscarPorId(id: number): Promise<UsuarioFormulario> {
    const usuario = this.usuariosFormulario.find((u) => u.id === id);
    if (!usuario) {
      return Promise.reject(new Error('Usuário não encontrado'));
    }
    return Promise.resolve(usuario);
  }
}