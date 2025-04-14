import { Component, Input, OnInit, inject } from '@angular/core';
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
  UserDefaultFormBuilderValidators,
} from 'shared-forms';
import { BtpInputComponent } from '@shared/components/btp-input/btp-input.component';
// import { BtpInputComponent } from '@shared/components/btp-input/btp-input.component';

@Component({
  selector: 'app-insert-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UsersModule,
    BtpInputComponent,
  ],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent implements OnInit {
  @Input() _form: FormGroup = new FormGroup({});
  @Input() _formOrigem: FormGroup = new FormGroup({});

  private formBuilder = inject(FormBuilder);
  private contextUseCaseService = inject(ContextUseCaseService);

  _formulario: FormGroup = new FormGroup({});
  _formularioOrigem: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.contextUseCaseService.authFlow();
    this._formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      nomeFantasia: [''],
      cpfCnpj: ['', [Validators.required]],
      rg: ['', [Validators.required]],
    });
    console.log(' this._formulario = ', this._formulario);
  }

  onSubmit(): void {
    this._formulario.get('name')?.markAsDirty();
    console.log(this._formulario.value);
  }

  // criarFormulario() {
  //   this._formulario = this.formBuilder.group(
  //     UserDefaultFormBuilderValidators.getModel()
  //   );
  // }

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

  cuspir() {
    console.log(this._formulario.getRawValue());
  }

  get valorInputName() {
    // console.log('this._formulario = ', this._formulario.get('name')?.errors);
    return this._formulario.get('name')?.value;
  }
}
