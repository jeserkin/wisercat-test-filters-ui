import { Route } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'filters',
        pathMatch: 'full'
    },
    {
        path: 'filters',
        loadChildren: () => import('./filters/filters.module').then(m => m.FiltersModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
