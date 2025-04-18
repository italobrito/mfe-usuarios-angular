import { Routes } from '@angular/router';

export const USUARIOS_ROUTES: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  {
    path: 'criar',
    loadComponent: () =>
      import('../pages/insert/insert.component').then((c) => c.InsertComponent),
  },
  {
    path: 'atualizar',
    loadComponent: () =>
      import('../pages/update/update.component').then((c) => c.UpdateComponent),
  },
  {
    path: 'deletar',
    loadComponent: () =>
      import('../pages/delete/delete.component').then((c) => c.DeleteComponent),
  },
  {
    path: 'listar',
    loadComponent: () =>
      import('../pages/list/list.component').then((c) => c.ListComponent),
  },
];
