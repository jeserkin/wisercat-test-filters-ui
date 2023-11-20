import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FiltersListComponent } from './filters-list/filters-list.component';
import { FiltersRoutingModule } from './filters-routing.module';
import { FilterCriteriaModalComponent } from './filter-criteria-modal/filter-criteria-modal.component';

@NgModule({
    declarations: [
        FiltersListComponent,
        FilterFormComponent,
        FilterModalComponent,
        FilterCriteriaModalComponent
    ],
    imports: [
        CommonModule,
        FiltersRoutingModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class FiltersModule {
}
