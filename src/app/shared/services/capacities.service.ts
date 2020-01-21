import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '../models/capacity.model';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CapacitiesService {

    constructor(private http: HttpClient) {
    }

    public getCapacityByID(id: number): Observable<Capacity> {
        return this.http.get<Capacity>(`${environment.apiUrl}/capacities/` + id);
    }

    getAll(): Observable<Capacity[]> {
        return this.http.get<Capacity[]>(`${environment.apiUrl}/capacities`);
    }
}
