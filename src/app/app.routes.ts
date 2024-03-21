import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: async () => (await import('@pages/auth')).routes,
        canMatch: [authGuard({ requiresAuthentication: false })],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        children: [
            {
                path: '',
                loadChildren: async () => (await import('@pages/home')).routes,
                data: { breadcrumb: { alias: 'Home' } },
                canMatch: [authGuard()],
            },
            {
                path: 'product/:id',
                loadChildren: async () => (await import('@pages/product')).routes,
                canMatch: [authGuard()],
                data: { breadcrumb: { alias: 'Product' } },
            },
        ],
    },
    {
        path: '**',
        loadComponent: async () => (await import('@pages/screens/not-found/not-found.component')).NotFoundComponent,
    },
];
