import { Component, EventEmitter, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-avatar-imagem',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './avatar-imagem.component.html',
    styleUrls: ['./avatar-imagem.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarImagemComponent {
    @Output() imagemSelecionada = new EventEmitter<string>();
    selectedImage: string | null = null;

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.selectedImage = reader.result as string;
                this.imagemSelecionada.emit(this.selectedImage);
            };
            reader.readAsDataURL(file);
        }
    }
}