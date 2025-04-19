import { CommonModule } from '@angular/common';
import { Input, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BtpDropdownComponent } from '../btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '../btn-input/btn-input.component';

@Component({
    selector: 'form-abstract-component',
    template: '',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BtnInputComponent,
        BtpDropdownComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export abstract class FormAbstractComponent {
    @Input() formulario!: FormGroup | any;
    @Input() formularioOrigem!: FormGroup | any;
}
