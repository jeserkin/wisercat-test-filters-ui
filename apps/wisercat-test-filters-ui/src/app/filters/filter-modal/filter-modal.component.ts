import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Filter } from '../shared/model/filter.model';

@Component({
    selector: 'wisercat-test-filters-ui-filter-modal',
    templateUrl: './filter-modal.component.html'
})
export class FilterModalComponent {

    constructor(public activeModal: NgbActiveModal) {
    }

    save(filter: Filter): void {
        this.activeModal.close(filter);
    }
}
