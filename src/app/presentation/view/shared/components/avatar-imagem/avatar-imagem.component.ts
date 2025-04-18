import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-avatar-imagem',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './avatar-imagem.component.html',
    styleUrls: ['./avatar-imagem.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicionado o CUSTOM_ELEMENTS_SCHEMA
})
export class AvatarImagemComponent {
    @Output() avatarSelected = new EventEmitter<string>(); // Emite o Base64 da imagem selecionada
    selectedImage: string | null = null; // Armazena a imagem em Base64 para exibição

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                this.selectedImage = reader.result as string; // Converte a imagem para Base64
                this.avatarSelected.emit(this.selectedImage); // Emite o Base64 para o componente pai
            };

            reader.readAsDataURL(file); // Lê o arquivo como Data URL (Base64)
        }
    }
}