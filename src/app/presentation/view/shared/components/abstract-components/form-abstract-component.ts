import { CommonModule } from '@angular/common';
import { Input, Component, Directive, Injectable, forwardRef, Provider, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { getFormControlProvider } from './btns-abstract';

@Component({ 
    selector: 'form-abstract-component', 
    template: '', 
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule], 
    // providers: [getFormControlProvider(FormAbstractComponent)],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export abstract class FormAbstractComponent {
    @Input() formulario!: FormGroup;
    @Input() formularioOrigem!: FormGroup;
}

// export function getFormControlProvider(component: any): Provider {
    // return {
    //     provide: NG_VALUE_ACCESSOR,
    //     useExisting: forwardRef(() => component),
    //     multi: true,
    // };
// }