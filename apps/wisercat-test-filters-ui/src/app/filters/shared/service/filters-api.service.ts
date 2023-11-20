import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, RawFilter } from '../model/filter.model';

@Injectable({
    providedIn: 'root'
})
export class FiltersApiService {

    // @Todo could be moved into separate configuration service if needed (to be picked up appropriately for calculated environment)
    private readonly BACKEND_URL = '/api';

    constructor(private httpClient: HttpClient) {
    }

    getAllFilters(): Observable<RawFilter[]> {
        const url = `${this.BACKEND_URL}/filters`;
        return this.httpClient.get<RawFilter[]>(url, {
            withCredentials: true
        });
    }

    addFilter(filter: Filter): Observable<RawFilter> {
        const url = `${this.BACKEND_URL}/filter`;
        return this.httpClient.post<RawFilter>(url, filter,{
            withCredentials: true
        });
    }
}
