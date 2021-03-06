import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, from, Observable, of} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {environment} from '../../../environments/environment';
import {catchError, flatMap, map, mergeMap, pluck, toArray} from 'rxjs/operators';
import {Capacity} from '../models/capacity.model';
import {CapacitiesService} from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {

    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public idAvailable(id: number): Observable<boolean> {
        return this.http.head<void>(`${environment.apiUrl}/unicorns/${id}`).pipe(
            map(() => false ),
            catchError(() => of(true)),
        );
    }

    // public getAllBad(): Unicorn[] { // il y a ils ont essayer ils ont eu des problèmes
    //     let unicorns = [];
    //     this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`).subscribe(
    //         u => unicorns = u
    //     );
    //     return unicorns; // toujours vide donc nope
    // }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> => {
                return from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> => {
                        return this.capacitiesService.getCapacityByID(capacityId);
                    }),
                    pluck('label'),
                    toArray(),
                    map((capacitiesLabels: string[]) => {
                        return {...unicorn, capacitieslabels: capacitiesLabels};
                    }),
                );
            }),
            toArray(),
        );
    }

    public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return forkJoin([
            this.getAll(),
            this.capacitiesService.getAll(),
        ]).pipe(
            map(([unicorns, capacities]): Unicorn[] =>
                unicorns.map(unicorn => ({
                    ...unicorn,
                    capacitiesLabels: unicorn.capacities.map(capacityId =>
                        capacities.find(capacity => capacity.id === capacityId).label
                    )
                }))
            )
        );
    }

    public delete(unicorn: Unicorn): Observable<void> {
        // 204
        return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
    }
}
