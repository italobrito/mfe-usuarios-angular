import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deletar-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './deletar.component.html',
})
export class DeletarComponent {}
