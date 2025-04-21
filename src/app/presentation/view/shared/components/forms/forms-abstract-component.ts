import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContextUseCaseService } from 'shared-forms';

@Component({
  selector: 'forms-abstract-component',
  template: '',
})
export abstract class FormsAbstractComponent implements OnInit {
  @Input() habilitarFormulario: boolean = false;

  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected contextUseCaseService = inject(ContextUseCaseService);

  _formulario!: FormGroup;

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this.criarFormulario();
    this.atualizarEstadoFormulario();
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

}