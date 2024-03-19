import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Product',
        loadComponent: async () => (await import('./product-detail/product-detail.component')).ProductDetailComponent,
    },
];
