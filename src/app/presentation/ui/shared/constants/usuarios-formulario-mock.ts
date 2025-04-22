import { UsuarioFormulario } from 'src/app/domain/entities/usuario';

export const USUARIOS_FORMULARIO_MOCK: UsuarioFormulario[] = [
  {
    id: 1,
    informacoesPessoais: {
      nomeCompleto: 'João Silva',
      genero: 'Masculino',
      email: 'joao@email.com',
      telefone: '11999999999',
      dataNascimento: '1990-01-01',
      cpf: '123.456.789-00',
      rg: '12.345.678-9',
    },
    endereco: {
      rua: 'Rua das Flores',
      numero: '123',
      complemento: 'Apto 101',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01000-000',
    },
    informacoesProfissionais: {
      cargo: 'Desenvolvedor',
      setor: 'TI',
      dataAdmissao: '2020-01-01',
      tipoUsuario: 'A',
      temaPreferido: 'Claro',
      status: 'Ativo',
    },
    avatar: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    informacoesPessoais: {
      nomeCompleto: 'Maria Oliveira',
      genero: 'Feminino',
      email: 'maria@email.com',
      telefone: '21999999999',
      dataNascimento: '1985-05-15',
      cpf: '987.654.321-00',
      rg: '98.765.432-1',
    },
    endereco: {
      rua: 'Avenida Brasil',
      numero: '456',
      complemento: '',
      bairro: 'Jardim América',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      cep: '20000-000',
    },
    informacoesProfissionais: {
      cargo: 'Gerente',
      setor: 'Vendas',
      dataAdmissao: '2015-03-10',
      tipoUsuario: 'B',
      temaPreferido: 'Escuro',
      status: 'Ativo',
    },
    avatar: 'https://example.com/avatar2.png',
  },
];