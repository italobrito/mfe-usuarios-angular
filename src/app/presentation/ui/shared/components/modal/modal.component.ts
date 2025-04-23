import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() isVisible: boolean = false;
    @Input() title: string = 'Confirmação';
    @Input() message: string = 'Tem certeza que deseja realizar esta ação?';
    @Input() tipo: 'atenção' | 'confirmaçao' = 'confirmaçao';

    @Output() onConfirm = new EventEmitter<void>();
    @Output() onClose = new EventEmitter<void>();

    confirm(): void {
        this.onConfirm.emit();
        this.isVisible = false;
    }

    close(): void {
        this.onClose.emit();
        this.isVisible = false;
    }
}