import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContextUseCaseService } from 'shared-forms';

@Component({
  selector: 'forms-abstract-component',
  template: '',
})
export abstract class FormsAbstractComponent implements OnInit {
  @Input() habilitarFormulario: boolean = true;

  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected contextUseCaseService = inject(ContextUseCaseService);

  _formulario!: FormGroup;

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
    console.log('FormsAbstractComponent Formulario COMPLETO', this._formulario);
    console.log('FormsAbstractComponent informacoesPessoais = ', this._formulario.get('informacoesPessoais'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      if (!changes['habilitarFormulario'].currentValue) {
        this.atualizarEstadoFormulario();
      }
    }, 100);
  }

  abstract criarFormulario(): void;

  atualizarEstadoFormulario(): void {
    if (this.habilitarFormulario) {
      this._formulario.enable();
    } else {
      this._formulario.disable();
    }
  }
  
  habilitarDesabilitarFormulario(): void {
    this.atualizarEstadoFormulario();
  }

  updateContext() {
    let newContext = this.contextUseCaseService.getContext();
    newContext.mfeUsers = {
      rodou: true,
      testando: 'Deu certo',
    };
    console.log(
      'ReSULTADO mfe - users = ',
      this.contextUseCaseService.getContext()
    );
    this.contextUseCaseService.setContext(newContext);
  }

  imagemSelecionada(base64Image: any): void {
    this._formulario.patchValue({ avatar: base64Image });
  }  

  ativarValidacoes(): void {
    this._formulario.markAllAsTouched();
  }

  // submeterFormulario(): void {
  //   console.log('FORMULARIO COMPLETO = ', this._formulario);
  //   console.log('STATUS = ', this._formulario.status);
  //   console.log('INFORMACOES PESSOAIS valido = ', this._formulario.get('informacoesPessoais')?.status);
  //   console.log('ENDERECO valido = ', this._formulario.get('endereco')?.status);
  //   console.log('informacoesProfissionais valido = ', this._formulario.get('informacoesProfissionais')?.status);
  //   console.log('VALORES = ', this._formulario.getRawValue());
  //   this.ativarValidacoes()
  // }

  // preencherFormularioMock(): void {
  //   const mockData = {
  //     informacoesPessoais: {
  //       nomeCompleto: 'João da Silva',
  //       genero: 'M',
  //       email: 'joao.silva@example.com',
  //       telefone: '(11) 91234-5678',
  //       dataNascimento: '1990-01-01',
  //       cpf: '123.456.789-09',
  //       rg: '12.345.678-9',
  //     },
  //     endereco: {
  //       rua: 'Rua das Flores',
  //       numero: '123',
  //       complemento: 'Apto 45',
  //       bairro: 'Centro',
  //       cidade: 'São Paulo',
  //       estado: 'SP',
  //       cep: '01000-000',
  //     },
  //     informacoesProfissionais: {
  //       cargo: 'Desenvolvedor',
  //       setor: 'Tecnologia',
  //       dataAdmissao: '01/01/1987',
  //       tipoUsuario: 'A',
  //       temaPreferido: 'E',
  //       status: 'A',
  //     },
  //     avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA',
  //   };

  //   this._formulario.patchValue(mockData);
  // }

}