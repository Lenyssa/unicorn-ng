import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Unicorn } from '../../models/unicorn.model';
import { CartService } from '../../services/cart.service';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    public cart: Unicorn[] = [];
    public loading = false;

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(result => result.matches),
        shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver,
                cartService: CartService,
                loaderService: LoaderService) {
        cartService.cart.subscribe(cart => this.cart = cart);
        loaderService.pendingRequests.subscribe(pendingRequests => this.loading = !!pendingRequests);

    }

}
