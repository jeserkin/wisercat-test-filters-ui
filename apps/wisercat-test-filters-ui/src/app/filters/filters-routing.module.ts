import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersListComponent } from './filters-list/filters-list.component';

const routes: Routes = [
    {
        path: '',
        component: FiltersListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FiltersRoutingModule {
}
