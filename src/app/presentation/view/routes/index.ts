import { Routes } from '@angular/router';

export const USUARIOS_ROUTES: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  {
    path: 'criar',
    loadComponent: () =>
      import('../pages/cadastrar/cadastrar.component').then((c) => c.CadastrarComponent),
  },
  {
    path: 'atualizar',
    loadComponent: () =>
      import('../pages/atualizar/atualizar.component').then((c) => c.AtualizarComponent),
  },
  {
    path: 'deletar',
    loadComponent: () =>
      import('../pages/deletar/deletar.component').then((c) => c.DeletarComponent),
  },
  {
    path: 'listar',
    loadComponent: () =>
      import('../pages/listar/listar.component').then((c) => c.ListarComponent),
  },
];
