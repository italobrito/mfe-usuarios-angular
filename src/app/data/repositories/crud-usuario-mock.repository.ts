import { Injectable } from '@angular/core';

import { Usuario, UsuarioFormulario } from '@domain/entities/usuario';
import { UsuarioRepositoryInterface } from '@domain/interfaces/repositories/usuario-repository.interface';

@Injectable({ providedIn: 'root' })
export class CrudUsuarioMockRepository implements UsuarioRepositoryInterface {

  private usuarios: Usuario[] = [
    { id: 1, nome: 'Ítalo Pereira de Brito', email: 'pbitalo@hotmail.com', tipoUsuario: 'C', status: 'A' },
    { id: 2, nome: 'Maria Clara Oliveira', email: 'maria.clara@gmail.com', tipoUsuario: 'C', status: 'A' },
    { id: 3, nome: 'Carlos Eduardo Silva', email: 'carlos.eduardo@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 4, nome: 'Ana Beatriz Santos', email: 'ana.beatriz@gmail.com', tipoUsuario: 'C', status: 'I' },
    { id: 5, nome: 'João Pedro Almeida', email: 'joao.pedro@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 6, nome: 'Fernanda Costa', email: 'fernanda.costa@gmail.com', tipoUsuario: 'C', status: 'I' },
    { id: 7, nome: 'Lucas Silva', email: 'lucas.silva@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 8, nome: 'Mariana Santos', email: 'mariana.santos@gmail.com', tipoUsuario: 'C', status: 'A' },
    { id: 9, nome: 'Rafael Oliveira', email: 'rafael.oliveira@gmail.com', tipoUsuario: 'C', status: 'I' },
    { id: 10, nome: 'Lucas Silva', email: 'lucas.silva@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 11, nome: 'Mariana Santos', email: 'mariana.santos@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 12, nome: 'Rafael Oliveira', email: 'rafael.oliveira@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 13, nome: 'Beatriz Lima', email: 'beatriz.lima@gmail.com', tipoUsuario: 'A', status: 'A' },
    { id: 14, nome: 'Beatriz Lima', email: 'beatriz.lima@gmail.com', tipoUsuario: 'A', status: 'A' },
    // { id: 15, nome: 'Beatriz Lima', email: 'beatriz.lima@gmail.com', tipoUsuario: 'A', status: 'A' },
    // { id: 16, nome: 'Beatriz Lima', email: 'beatriz.lima@gmail.com', tipoUsuario: 'A', status: 'A' },
  ];

  private usuariosFormulario: UsuarioFormulario[] = [
    {
      id: 1,
      informacoesPessoais: {
        nomeCompleto: 'Ítalo Pereira de Brito',
        genero: 'M',
        email: 'pbitalo@hotmail.com',
        telefone: '(11) 9 7891 1354',
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
    {
      id: 5,
      informacoesPessoais: {
        nomeCompleto: 'João Pedro Almeida',
        genero: 'M',
        email: 'joao.pedro@gmail.com',
        telefone: '(87) 9 9874 3211',
        dataNascimento: '12/03/1992',
        cpf: '123.456.789-01',
        rg: '123456789',
      },
      endereco: {
        rua: 'Rua das Acácias',
        numero: '123',
        complemento: 'Casa',
        bairro: 'Jardim América',
        cidade: 'Recife',
        estado: 'PE',
        cep: '50000-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'A',
        status: 'A',
        cargo: 'Desenvolvedor',
        dataAdmissao: '2020-01-15',
        setor: 'TI',
        temaPreferido: 'Claro',
      },
      avatar: 'avatar5.png',
    },
    {
      id: 6,
      informacoesPessoais: {
        nomeCompleto: 'Fernanda Costa',
        genero: 'F',
        email: 'fernanda.costa@gmail.com',
        telefone: '(87) 9 9874 3212',
        dataNascimento: '22/07/1988',
        cpf: '234.567.890-12',
        rg: '234567890',
      },
      endereco: {
        rua: 'Avenida Brasil',
        numero: '456',
        complemento: 'Apto 202',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01000-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'C',
        status: 'I',
        cargo: 'Analista de Marketing',
        dataAdmissao: '2018-05-10',
        setor: 'Marketing',
        temaPreferido: 'Escuro',
      },
      avatar: 'avatar6.png',
    },
    {
      id: 7,
      informacoesPessoais: {
        nomeCompleto: 'Lucas Silva',
        genero: 'M',
        email: 'lucas.silva@gmail.com',
        telefone: '(87) 9 9874 3213',
        dataNascimento: '15/09/1990',
        cpf: '345.678.901-23',
        rg: '345678901',
      },
      endereco: {
        rua: 'Rua das Flores',
        numero: '789',
        complemento: 'Sala 101',
        bairro: 'Bela Vista',
        cidade: 'Porto Alegre',
        estado: 'RS',
        cep: '90000-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'A',
        status: 'A',
        cargo: 'Gerente de Projetos',
        dataAdmissao: '2015-03-20',
        setor: 'TI',
        temaPreferido: 'Claro',
      },
      avatar: 'avatar7.png',
    },
    {
      id: 8,
      informacoesPessoais: {
        nomeCompleto: 'Mariana Santos',
        genero: 'F',
        email: 'mariana.santos@gmail.com',
        telefone: '(87) 9 9874 3214',
        dataNascimento: '10/11/1993',
        cpf: '456.789.012-34',
        rg: '456789012',
      },
      endereco: {
        rua: 'Avenida Paulista',
        numero: '1234',
        complemento: 'Cobertura',
        bairro: 'Paulista',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01310-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'B',
        status: 'A',
        cargo: 'Especialista em Recursos Humanos',
        dataAdmissao: '2019-07-01',
        setor: 'RH',
        temaPreferido: 'Escuro',
      },
      avatar: 'avatar8.png',
    },
    {
      id: 9,
      informacoesPessoais: {
        nomeCompleto: 'Rafael Oliveira',
        genero: 'M',
        email: 'rafael.oliveira@gmail.com',
        telefone: '(87) 9 9874 3215',
        dataNascimento: '05/01/1987',
        cpf: '567.890.123-45',
        rg: '567890123',
      },
      endereco: {
        rua: 'Rua XV de Novembro',
        numero: '567',
        complemento: 'Apto 303',
        bairro: 'Centro',
        cidade: 'Curitiba',
        estado: 'PR',
        cep: '80020-310',
      },
      informacoesProfissionais: {
        tipoUsuario: 'C',
        status: 'I',
        cargo: 'Coordenador de Vendas',
        dataAdmissao: '2017-11-15',
        setor: 'Vendas',
        temaPreferido: 'Claro',
      },
      avatar: 'avatar9.png',
    },
    {
      id: 10,
      informacoesPessoais: {
        nomeCompleto: 'Beatriz Lima',
        genero: 'F',
        email: 'beatriz.lima@gmail.com',
        telefone: '(87) 9 9874 3216',
        dataNascimento: '18/02/1992',
        cpf: '678.901.234-56',
        rg: '678901234',
      },
      endereco: {
        rua: 'Rua das Palmeiras',
        numero: '890',
        complemento: 'Casa',
        bairro: 'Jardim Botânico',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22470-000',
      },
      informacoesProfissionais: {
        tipoUsuario: 'A',
        status: 'A',
        cargo: 'Analista de Dados',
        dataAdmissao: '2021-09-10',
        setor: 'TI',
        temaPreferido: 'Escuro',
      },
      avatar: 'avatar10.png',
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