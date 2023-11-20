export interface RawCriteria {
    type: 'Amount' | 'Title' | 'Date';
    parameter: 'More' | 'Less' | 'From' | 'To' | 'Starts with' | 'Ends with';
    value: string;
}

export interface Criteria {
    type: string;
    parameter: string;
    value: string;
}