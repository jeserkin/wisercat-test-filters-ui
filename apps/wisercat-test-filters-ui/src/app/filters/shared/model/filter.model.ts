import { Criteria, RawCriteria } from './criteria.model';

export interface RawFilter {
    filterName: string;
    selection: number;
    criteria: RawCriteria[];
}

export interface Filter {
    name: string;
    selection: number;
    criteria: Criteria[];
}