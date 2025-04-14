import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'insert',
    loadComponent: () =>
      import('../pages/insert/insert.component').then((c) => c.InsertComponent),
  },
  {
    path: 'update',
    loadComponent: () =>
      import('../pages/update/update.component').then((c) => c.UpdateComponent),
  },
  {
    path: 'delete',
    loadComponent: () =>
      import('../pages/delete/delete.component').then((c) => c.DeleteComponent),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('../pages/list/list.component').then((c) => c.ListComponent),
  },
];
