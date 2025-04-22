import { Pipe, PipeTransform } from '@angular/core';

import { TIPOS_USUARIOS } from 'src/app/presentation/ui/shared/constants/tipos-usuarios';
import { TIPOS_STATUS_USUARIO } from 'src/app/presentation/ui/shared/constants/tipos-status-usuario';

@Pipe({
  name: 'mapValueToLabel',
  standalone: true,
})
export class MapValueToLabelPipe implements PipeTransform {
  private readonly typeMappings: Record<string, any[]> = {
    usuario: TIPOS_USUARIOS,
    status: TIPOS_STATUS_USUARIO
  };
  transform(value: string, type: 'usuario' | 'status'): string {
    const mapping = this.typeMappings[type];
    return mapping?.find(item => item.value === value)?.label || value;
  }
}