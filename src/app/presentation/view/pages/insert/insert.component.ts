import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { ContextUseCaseService } from 'shared-forms';

import { AvatarImagemComponent } from '@shared/components/avatar-imagem/avatar-imagem.component';

import { InformacoesPessoaisFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-pessoais';
import { InformacoesProfissionaisFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-profissionais';
import { EnderecoFormBuilderValidators } from '@shared/forms-builders-validators/informacoes-endereco';

import { InformacoesPessoaisComponent } from '@shared/components/forms/informacoes-pessoais/informacoes-pessoais.component';
import { InformacoesEnderecoComponent } from '@shared/components/forms/informacoes-endereco/informacoes-endereco.component';
import { InformacoesProfissionaisComponent } from '@shared/components/forms/informacoes-profissionais/informacoes-profissionais.component';

@Component({
  selector: 'app-insert-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AvatarImagemComponent,
    InformacoesPessoaisComponent,
    InformacoesEnderecoComponent,
    InformacoesProfissionaisComponent
  ],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InsertComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private contextUseCaseService = inject(ContextUseCaseService);

  _formulario!: FormGroup;

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
    console.log('InsertComponent Formulario COMPLETO', this._formulario);
    console.log('InsertComponent informacoesPessoais = ', this._formulario.get('informacoesPessoais'));
  }

  onSubmit(): void {
    console.log('FORMULARIO COMPLETO = ', this._formulario);
    console.log('STATUS = ', this._formulario.status);
    console.log('INFORMACOES PESSOAIS valido = ', this._formulario.get('informacoesPessoais')?.status);
    console.log('ENDERECO valido = ', this._formulario.get('endereco')?.status);
    console.log('informacoesProfissionais valido = ', this._formulario.get('informacoesProfissionais')?.status);
    console.log('VALORES = ', this._formulario.getRawValue());
  }

  criarFormulario() {
    this._formulario = this.formBuilder.group({
      informacoesPessoais: this.formBuilder.group(InformacoesPessoaisFormBuilderValidators.getModel()),
      endereco: this.formBuilder.group(EnderecoFormBuilderValidators.getModel()),
      informacoesProfissionais: this.formBuilder.group(InformacoesProfissionaisFormBuilderValidators.getModel()),
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

  imagemSelecionada(base64Image: any): void {
    this._formulario.patchValue({ avatar: base64Image });
  }
}
