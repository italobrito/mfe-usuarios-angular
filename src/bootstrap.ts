import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';
import { USUARIOS_ROUTES } from './app/presentation/view/routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertComponent } from './app/presentation/view/pages/insert/insert.component';
import { CommonModule } from '@angular/common';

bootstrapApplication(InsertComponent, {
  providers: [
    importProvidersFrom(CommonModule, RouterModule, BrowserAnimationsModule),
    provideRouter(USUARIOS_ROUTES, withComponentInputBinding()),
  ],
});
