import { Pipe, PipeTransform } from '@angular/core';

import { TIPOS_STATUS_USUARIO, TIPOS_USUARIOS } from 'shared-forms';

@Pipe({
  name: 'mapearValorLabel',
  standalone: true,
})
export class MapearValorLabelPipe implements PipeTransform {
  private readonly typeMappings: Record<string, any[]> = {
    usuario: TIPOS_USUARIOS,
    status: TIPOS_STATUS_USUARIO
  };
  transform(value: string, type: 'usuario' | 'status'): string {
    const mapping = this.typeMappings[type];
    return mapping?.find(item => item.value === value)?.label || value;
  }
}