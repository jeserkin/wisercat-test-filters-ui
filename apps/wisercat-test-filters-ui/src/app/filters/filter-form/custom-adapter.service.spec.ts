import { TestBed } from '@angular/core/testing';
import { CustomDateParserFormatter } from './custom-date-parser-formatter.service';

describe('CustomDateParserFormatter', () => {
    let service: CustomDateParserFormatter;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CustomDateParserFormatter);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});