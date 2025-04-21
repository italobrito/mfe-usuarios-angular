import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesAbstractComponent } from '@shared/components/forms/pages-abstract-component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent
  ],
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent extends PagesAbstractComponent {
  override persistirDados(): void {
    console.log('CadastrarComponent persistirDados', this.componente._formulario.getRawValue());
  }
  preencherFormularioMock(): void {
    const mockData = {
      informacoesPessoais: {
        nomeCompleto: 'João da Silva',
        genero: 'M',
        email: 'joao.silva@example.com',
        telefone: '(11) 9 1234 6783',
        dataNascimento: '01/04/2015',
        cpf: '123.456.789-09',
        rg: '12.345.678-9',
      },
      endereco: {
        rua: 'Rua das Flores',
        numero: '123',
        complemento: 'Apto 45',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01000-000',
      },
      informacoesProfissionais: {
        cargo: 'Desenvolvedor',
        setor: 'Tecnologia',
        dataAdmissao: '01/01/1987',
        tipoUsuario: 'A',
        temaPreferido: 'E',
        status: 'A',
      },
      avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
    };

    this.componente._formulario.patchValue(mockData);
  }
}
