import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/features/home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./components/features/about/about').then(m => m.About) },
  { path: 'programs', loadComponent: () => import('./components/features/programs/programs').then(m => m.Programs) },
  { path: 'gallery', loadComponent: () => import('./components/features/gallery/gallery').then(m => m.Gallery) },
  { path: 'events', loadComponent: () => import('./components/features/events/events').then(m => m.Events) },
  { path: 'membership', loadComponent: () => import('./components/features/membership/membership').then(m => m.Membership) },
  { path: 'donate', loadComponent: () => import('./components/features/donate/donate').then(m => m.Donate) },
  { path: 'contact', loadComponent: () => import('./components/features/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' },
];