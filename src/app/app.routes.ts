import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home').then(c => c.Home) },
  { path: 'esperienze_formative', loadComponent: () => import('./pages/esperienze_formative').then(c => c.EsperienzeFormative) },
  { path: 'esperienze_lavorative', loadComponent: () => import('./pages/esperienze_lavorative').then(c => c.EsperienzeLavorative) },
  { path: 'contatto', loadComponent: () => import('./pages/contatto').then(c => c.Contatto) },
  { path: 'certificazioni', loadComponent: () => import('./pages/certificazioni').then(c => c.Certificazioni) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];