export interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipoUsuario: string;
  status: string;
}

export interface UsuarioFormulario {
  id: number;
  informacoesPessoais: {
    nomeCompleto: string;
    genero: string;
    email: string;
    telefone: string;
    dataNascimento: string;
    cpf: string;
    rg: string;
  };
  endereco: {
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  informacoesProfissionais: {
    cargo: string;
    setor: string;
    dataAdmissao: string;
    tipoUsuario: string;
    temaPreferido: string;
    status: string;
  };
  avatar: string;
}