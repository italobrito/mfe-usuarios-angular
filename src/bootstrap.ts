import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';

import { USUARIOS_ROUTES } from './app/presentation/ui/routes';
import { ListarComponent } from './app/presentation/ui/pages/listar/listar.component';

bootstrapApplication(ListarComponent, {
  providers: [
    importProvidersFrom(CommonModule, RouterModule, BrowserAnimationsModule),
    provideRouter(USUARIOS_ROUTES, withComponentInputBinding()),
  ],
});
