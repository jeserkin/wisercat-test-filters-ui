import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as dayjs from 'dayjs';
import { Filter } from '../shared/model/filter.model';

@Component({
    selector: 'wisercat-test-filters-ui-filter-criteria-modal',
    templateUrl: './filter-criteria-modal.component.html'
})
export class FilterCriteriaModalComponent {

    @Input() get filter(): Filter {
        return this._filter;
    };
    set filter(filter: Filter) {
        this._filter = filter;
        this._filter.criteria = this._filter.criteria.map(criteriaItem => {
            criteriaItem.value = criteriaItem.type === 'Date' ? dayjs.unix(parseInt(criteriaItem.value)).format() : criteriaItem.value;
            return criteriaItem;
        });
    }

    private _filter!: Filter;

    constructor(public activeModal: NgbActiveModal) {
    }
}
