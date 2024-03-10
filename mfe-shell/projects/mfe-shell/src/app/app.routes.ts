import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { LayoutComponent } from '@sdk/layout';

export const childRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('mfe-dashboard/Component').then((m) => m.DashboardComponent),
  },
]

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe-auth',
        exposedModule: './Module'
      })
      .then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: childRoutes
  }
];
