import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    public cart = new BehaviorSubject<Unicorn[]>([]);

    public addToCart(unicorn: Unicorn): void {
        this.cart.next(this.cart.getValue().concat([unicorn]));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.cart.next(this.cart.getValue().filter((u: Unicorn) => u.id !== unicorn.id));
    }

    public isInCart(unicorn: Unicorn): boolean {
        return this.cart.getValue().some((u: Unicorn) => u.id === unicorn.id);
    }
}
