import { Component, Input, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  ContextUseCaseService,
  UsersModule,
} from 'shared-forms';

import { BtnInputComponent } from '@shared/components/btn-input/btn-input.component';
import { BtpDropdownComponent } from '@shared/components/btn-dropdown/btp-dropdown.component';

import { dataPadraoBrasileiro } from '@shared/validators/ValidaDataNascimento';
import { validaTelefone } from '@shared/validators/ValidaTelefone';
import { validaEmail } from '@shared/validators/ValidaEmail';
import { validaCep } from '@shared/validators/ValidaCep';

import { ESTADOS_BRASILEIROS } from '@shared/constants/estados-brasileiros';
import { GENEROS } from '@shared/constants/generos';

import { DropdownType } from '@entities/dropdown-type';
import { TEMA_SISTEMA } from '@shared/constants/tema-sistema';
import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';
import { TIPOS_STATUS_USUARIO } from '@shared/constants/tipos-status-usuario';
import { AvatarImagemComponent } from '@shared/components/avatar-imagem/avatar-imagem.component';


@Component({
  selector: 'app-insert-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UsersModule,
    BtnInputComponent,
    BtpDropdownComponent,
    AvatarImagemComponent
  ],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InsertComponent implements OnInit {
  @Input() _form: FormGroup = new FormGroup({});
  @Input() _formOrigem: FormGroup = new FormGroup({});

  private formBuilder = inject(FormBuilder);
  private contextUseCaseService = inject(ContextUseCaseService);

  _formulario: FormGroup = new FormGroup({});
  _formularioOrigem: FormGroup = new FormGroup({});

  _listaEstados: Array<DropdownType> = ESTADOS_BRASILEIROS;
  _listaGeneros: Array<DropdownType> = GENEROS;

  _listaTemas: Array<DropdownType> = TEMA_SISTEMA;
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;

  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;
  

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
  }

  onSubmit(): void {
    this._formulario.get('name')?.markAsDirty();
    console.log(this._formulario.value);
  }

  criarFormulario() {
    // this._formulario = this.formBuilder.group(
    //   UserDefaultFormBuilderValidators.getModel()
    // );
    this._formulario = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required, validaEmail()]],
      telefone: ['', [Validators.required, validaTelefone()]],
      dataNascimento: ['', [Validators.required, dataPadraoBrasileiro()]],

      rua: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required]],
      cep: ['', [Validators.required, validaCep()]],

      cargo: ['', [Validators.required]],
      setor: ['', [Validators.required]],
      dataAdmissao: ['', [Validators.required, dataPadraoBrasileiro()]],

      tipoUsuario: ['', [Validators.required]],
      temaPreferido: ['', [Validators.required]],    
      status: ['', [Validators.required]],     
      
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

  cuspir() {
    console.log(this._formulario.getRawValue());
  }
}
