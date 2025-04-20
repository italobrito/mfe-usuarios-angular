import { CommonModule } from '@angular/common';
import { Input, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-abstract-component',
    template: '',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export abstract class FormsAbstractComponent {
    @Input() formulario!: FormGroup | any;
    @Input() formularioOrigem!: FormGroup | any;
}
