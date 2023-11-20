import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { Criteria } from '../shared/model/criteria.model';
import { Filter } from '../shared/model/filter.model';
import { CustomAdapter } from './custom-adapter.service';
import { CustomDateParserFormatter } from './custom-date-parser-formatter.service';

@Component({
    selector: 'wisercat-test-filters-ui-filter-form',
    templateUrl: './filter-form.component.html',
    providers: [
        { provide: NgbDateAdapter, useClass: CustomAdapter },
        { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    ]
})
export class FilterFormComponent implements OnInit {

    @Output()
    closeEvent = new EventEmitter<void>();

    @Output()
    saveEvent = new EventEmitter<Filter>();

    formGroup!: FormGroup;
    readonly allowedTypes = ['Amount', 'Title', 'Date'];
    private readonly allowedParameters = new Map<string, string[]>([
        ['Amount', ['More', 'Less']],
        ['Title', ['Starts with', 'Ends with']],
        ['Date', ['From', 'To']]
    ]);

    constructor(
        private formBuilder: FormBuilder,
        private ngbCalendar: NgbCalendar,
        private dateAdapter: NgbDateAdapter<string>
    ) {
        dayjs.extend(customParseFormat);
    }

    ngOnInit(): void {
        this.initializeForm();
    }

    get filterNameFormControl(): FormControl {
        return this.formGroup?.get('filterName') as FormControl;
    }

    get criteriaFormArray(): FormArray {
        return this.formGroup?.get('criteria') as FormArray;
    }

    addCriteriaItem(): void {
        this.criteriaFormArray.push(this.createCriteriaFormGroup());
    }

    removeCriteriaItem(position: number): void {
        this.criteriaFormArray.removeAt(position);
    }

    getParametersBasedOnType(type: string): string[] {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.allowedParameters.get(type)!;
    }

    close(): void {
        this.closeEvent.emit();
    }

    save(): void {
        const rawValue = this.formGroup.getRawValue();
        this.saveEvent.emit({
            name: rawValue.filterName,
            selection: rawValue.selection,
            criteria: rawValue.criteria.map((item: { type: string; parameter: string; value: string; }) => {
                return {
                    type: item.type,
                    parameter: item.parameter,
                    value: item.type === 'Date' ? `${dayjs(item.value, 'DD.MM.YYYY').unix()}` : item.value
                } as Criteria;
            })
        } as Filter);
    }

    private initializeForm(): void {
        this.formGroup = this.formBuilder.group({
            filterName: this.formBuilder.control(''),
            criteria: this.formBuilder.array([this.createCriteriaFormGroup()]),
            selection: this.formBuilder.control('1')
        });
    }

    private createCriteriaFormGroup(): FormGroup {
        const parameter = this.formBuilder.control(this.getParametersBasedOnType(this.allowedTypes[0])[0]);
        const type = this.formBuilder.control(this.allowedTypes[0]);
        const valueControl = this.formBuilder.control<string | { day: number; month: number; year: number }>('');
        type.valueChanges.subscribe(value => {
            if (value != null) {
                parameter.patchValue(this.getParametersBasedOnType(value)[0], {
                    emitViewToModelChange: true
                });
                valueControl.patchValue(value === 'Date' ? this.dateAdapter.toModel(this.ngbCalendar.getToday()) : '', {
                    emitViewToModelChange: true
                });
            }
        });
        return this.formBuilder.group({
            type,
            parameter,
            value: valueControl
        });
    }
}
