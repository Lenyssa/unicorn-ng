import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public pendingRequests = new BehaviorSubject<number>(0);

    public increment() {
        this.pendingRequests.next(this.pendingRequests.getValue() + 1);
    }

    public decrement() {
        this.pendingRequests.next(this.pendingRequests.getValue() - 1);
    }

}
