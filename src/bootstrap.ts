import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';

import { USUARIOS_ROUTES } from './app/presentation/view/routes';

import { ListarComponent } from './app/presentation/view/pages/listar/listar.component';

bootstrapApplication(ListarComponent, {
  providers: [
    importProvidersFrom(CommonModule, RouterModule, BrowserAnimationsModule),
    provideRouter(USUARIOS_ROUTES, withComponentInputBinding()),
  ],
});
