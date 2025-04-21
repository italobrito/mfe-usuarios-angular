import { Routes } from '@angular/router';

export const USUARIOS_ROUTES: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  {
    path: 'cadastrar',
    loadComponent: () =>
      import('../pages/cadastrar/cadastrar.component').then((c) => c.CadastrarComponent),
  },
  {
    path: 'atualizar/:id',
    loadComponent: () =>
      import('../pages/atualizar/atualizar.component').then((c) => c.AtualizarComponent),
  },
  {
    path: 'visualizar/:id',
    loadComponent: () =>
      import('../pages/visualizar/visualizar.component').then((c) => c.visualizarComponent),
  },
  {
    path: 'deletar/:id',
    loadComponent: () =>
      import('../pages/deletar/deletar.component').then((c) => c.DeletarComponent),
  },
  {
    path: 'listar',
    loadComponent: () =>
      import('../pages/listar/listar.component').then((c) => c.ListarComponent),
  },
];
