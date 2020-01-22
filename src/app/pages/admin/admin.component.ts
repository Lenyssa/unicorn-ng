import {Component, OnDestroy} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {

    public time: Date;
    public time2: Date;
    // private timeSub: Subscription;
    // private timeSub2: Subscription;
    private ngUnsubscribe = new Subject<void>();

    constructor() {
        // this.timeSub =
        interval(1000).pipe(
            takeUntil(this.ngUnsubscribe),
            tap(i => console.log(i)),
            map(() => new Date()),
        ).subscribe(time => {
            console.log('sub' + time);
            this.time = time;
        });
        // this.timeSub2 =
        interval(1000).pipe(
            takeUntil(this.ngUnsubscribe),
            map(() => new Date()),
        ).subscribe(time => {
            console.log('sub' + time);
            this.time2 = time;
        });
    }

    ngOnDestroy(): void {
        // this.timeSub.unsubscribe();
        // this.timeSub2.unsubscribe();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
