import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-abstract-component',
    template: '',
    standalone: true,
    imports: [CommonModule],
})
export abstract class FormsAbstractComponent {
    @Input() formulario!: FormGroup | any;
    @Input() formularioOrigem!: FormGroup | any;
}
