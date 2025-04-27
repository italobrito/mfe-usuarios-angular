import { Directive } from '@angular/core';

import { BotaoAbstractDirective } from './botao-abstract.directive';

@Directive({
    selector: '[btn-visualizar]',
    standalone: true,
})
export class BtnVisualizarDirective extends BotaoAbstractDirective {
    protected getClasses(): string[] {
        return ['btn', 'btn-sm', 'btn-info'];
    }

    protected getTexto(): string {
        return 'Visualizar';
    }
}