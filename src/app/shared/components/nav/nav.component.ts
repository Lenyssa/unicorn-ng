import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {CartService} from '../../services/cart.service';
import {Unicorn} from '../../models/unicorn.model';
import {LoaderService} from '../../services/loader.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    public cart: Unicorn[] = [];
    public loading = false;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver, private cartService: CartService, private loaderService: LoaderService) {
        this.cartService.cart.subscribe((value: Unicorn[]) => this.cart = value);
        this.loaderService.pendingRequests.subscribe((value => this.loading = !!value));
    }

}
