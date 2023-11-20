import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCriteriaModalComponent } from './filter-criteria-modal.component';

describe('FilterCriteriaModalComponent', () => {
  let component: FilterCriteriaModalComponent;
  let fixture: ComponentFixture<FilterCriteriaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCriteriaModalComponent]
    });
    fixture = TestBed.createComponent(FilterCriteriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
