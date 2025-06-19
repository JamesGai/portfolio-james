import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.page').then((m) => m.ProjectsPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
