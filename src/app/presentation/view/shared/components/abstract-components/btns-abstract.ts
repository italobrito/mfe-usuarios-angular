import { Input, Component, forwardRef, Provider } from '@angular/core';

import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { getMensagemErro } from '@shared/validators/DescricoesErros';

@Component({ selector: 'app-btns-abstract', template: '' })
export abstract class BtnsAbstractComponent {
    @Input() label: string = '';
    @Input() control!: FormControl;

    get isInvalido(): boolean {
        return this.control ? this.control.invalid && (this.control.dirty || this.control.touched) : false;
    }

    get mensagemErro(): string | null {
        return getMensagemErro(this.control);
    }
}

export function getFormControlProvider(component: any): Provider {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => component),
        multi: true,
    };
}