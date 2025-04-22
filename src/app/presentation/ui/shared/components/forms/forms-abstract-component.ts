import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContextUseCaseService } from 'shared-forms';

@Component({
  selector: 'forms-abstract-component',
  template: '',
})
export abstract class FormsAbstractComponent implements OnInit {
  private _habilitarFormulario: boolean = false;

  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected contextUseCaseService = inject(ContextUseCaseService);

  _formulario!: FormGroup;

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
    this._formulario.disable();
  }

  abstract criarFormulario(): void;

  habilitarDesabilitarFormulario(): void {
    this._habilitarFormulario = !this._habilitarFormulario
    if (this._habilitarFormulario) {
      this._formulario.enable();
    } else {
      this._formulario.disable();
    }
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
}