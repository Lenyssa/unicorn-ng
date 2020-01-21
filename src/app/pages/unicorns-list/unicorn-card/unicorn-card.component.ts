import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {Capacity} from '../../../shared/models/capacity.model';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {CartService} from '../../../shared/services/cart.service';

@Component({
    selector: 'app-unicorns-card[unicorn]', // la balise qui a un attribut unicorn
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    private removed = new EventEmitter<void>();

    public isInCart = false;

    constructor(private unicornsService: UnicornsService, private cartService: CartService) {
    }

    ngOnInit(): void {
        // if (!this.unicorn) {
        //     throw new Error(`T'as oublié la licorne !!!`);
        // }
        this.isInCart = this.cartService.isInCart(this.unicorn);
    }

    public deleteUnicorn(): void {
        this.unicornsService.delete(this.unicorn).subscribe(() => {
            this.removed.emit();
        });
    }

    public toggleToCart(): void {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
        this.isInCart = !this.isInCart;
    }

}
