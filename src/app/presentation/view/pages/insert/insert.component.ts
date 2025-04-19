import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  ContextUseCaseService,
} from 'shared-forms';

import { ESTADOS_BRASILEIROS } from '@shared/constants/estados-brasileiros';

import { DropdownType } from '@entities/dropdown-type';
import { TEMA_SISTEMA } from '@shared/constants/tema-sistema';
import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';
import { TIPOS_STATUS_USUARIO } from '@shared/constants/tipos-status-usuario';
import { AvatarImagemComponent } from '@shared/components/avatar-imagem/avatar-imagem.component';

import { InformacoesPessoaisFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-pessoais';
import { InformacoesPessoaisComponent } from '@shared/components/forms/informacoes-pessoais/informacoes-pessoais.component';

@Component({
  selector: 'app-insert-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarImagemComponent,
    InformacoesPessoaisComponent
  ],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InsertComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private contextUseCaseService = inject(ContextUseCaseService);

  _formulario!: FormGroup ;

  _listaEstados: Array<DropdownType> = ESTADOS_BRASILEIROS;

  _listaTemas: Array<DropdownType> = TEMA_SISTEMA;
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;

  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;
  

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
    console.log('InsertComponent Formulario COMPLETO',this._formulario);
    console.log('InsertComponent informacoesPessoais = ',this._formulario.get('informacoesPessoais'));
  }

  onSubmit(): void {
    console.log('FORMULARIO COMPLETO = ',this._formulario);
    console.log('STATUS = ',this._formulario.status);
    console.log('VALORES = ',this._formulario.getRawValue());
  }

  criarFormulario() {
    // this._formulario = this.formBuilder.group(
    //   UserDefaultFormBuilderValidators.getModel()
    // );
    this._formulario = this.formBuilder.group({

      informacoesPessoais: this.formBuilder.group(InformacoesPessoaisFormBuilderValidators.getModel()),

      // endereco: this.formBuilder.group({}),

      // informacoesProfissionais: this.formBuilder.group({}),


      // nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      // genero: ['', [Validators.required]],
      // email: ['', [Validators.required, validaEmail()]],
      // telefone: ['', [Validators.required, validaTelefone()]],
      // dataNascimento: ['', [Validators.required, dataPadraoBrasileiro()]],

      // rua: ['', [Validators.required, Validators.minLength(3)]],
      // numero: ['', [Validators.required]],
      // complemento: ['', [Validators.required]],
      // bairro: ['', [Validators.required, Validators.minLength(3)]],
      // cidade: ['', [Validators.required, Validators.minLength(3)]],
      // estado: ['', [Validators.required]],
      // cep: ['', [Validators.required, validaCep()]],

      // cargo: ['', [Validators.required]],
      // setor: ['', [Validators.required]],
      // dataAdmissao: ['', [Validators.required, dataPadraoBrasileiro()]],

      // tipoUsuario: ['', [Validators.required]],
      // temaPreferido: ['', [Validators.required]],    
      // status: ['', [Validators.required]],     
      
      avatar: [''],  

    });
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

  onAvatarSelected(base64Image: any): void {
    console.log('Imagem selecionada em Base64:', base64Image);
    // Salve o Base64 no formulário ou envie para o backend
    this._formulario.patchValue({ avatar: base64Image });
  }
}
