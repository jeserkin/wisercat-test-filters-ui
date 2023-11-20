import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, mergeMap, Observable, of } from 'rxjs';
import { FilterCriteriaModalComponent } from '../filter-criteria-modal/filter-criteria-modal.component';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { Criteria, RawCriteria } from '../shared/model/criteria.model';
import { Filter, RawFilter } from '../shared/model/filter.model';
import { FiltersApiService } from '../shared/service/filters-api.service';

@Component({
    selector: 'wisercat-test-filters-ui-filters-list',
    templateUrl: './filters-list.component.html'
})
export class FiltersListComponent implements OnInit {

    filters$!: Observable<Filter[]>;
    showAddFilter = false;

    private refreshFilterListSubject = new BehaviorSubject<number>(0);
    private modalRef!: NgbModalRef;

    constructor(
        private filtersApi: FiltersApiService,
        private modalService: NgbModal
    ) {
    }

    ngOnInit(): void {
        this.filters$ = this.refreshFilterListSubject.asObservable()
            .pipe(
                mergeMap(() => this.filtersApi.getAllFilters()),
                mergeMap(rawFilters => of(FiltersListComponent.toFilters(rawFilters)))
            );
    }

    openAddFilter(asModal = false): void {
        if (asModal) {
            this.modalRef = this.modalService.open(FilterModalComponent, { size: 'lg', scrollable: true });
            this.modalRef.result.then(filter => {
                if (filter !== 'Close') {
                    this.addFilter(filter);
                }
            });
        } else {
            this.showAddFilter = true;
        }
    }

    viewCriteriaList(filter: Filter): void {
        const ngbModalRef = this.modalService.open(FilterCriteriaModalComponent, { size: 'lg', scrollable: true });
        ngbModalRef.componentInstance.filter = filter;
    }

    addFilter(filter: Filter): void {
        this.filtersApi.addFilter(filter).subscribe(() => {
            this.refreshFilterListSubject.next(this.refreshFilterListSubject.value + 1);
            this.showAddFilter = false;
        });
    }

    private static toFilters(rawFilters: RawFilter[]): Filter[] {
        return rawFilters.map(rawFilter => {
            return {
                name: rawFilter.filterName,
                selection: rawFilter.selection,
                criteria: FiltersListComponent.toFilterCriteria(rawFilter.criteria)
            } as Filter;
        });
    }

    private static toFilterCriteria(rawCriteria: RawCriteria[]): Criteria[] {
        return rawCriteria.map(rawCriteriaItem => {
            return {
                type: rawCriteriaItem.type,
                parameter: rawCriteriaItem.parameter,
                value: rawCriteriaItem.value
            } as Criteria;
        });
    }
}
