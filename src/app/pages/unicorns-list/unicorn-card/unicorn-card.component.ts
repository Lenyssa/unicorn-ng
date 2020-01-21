import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {Capacity} from '../../../shared/models/capacity.model';
import {UnicornsService} from '../../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorns-card[unicorn]', // la balise qui a un attribut unicorn
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Input()
    private capacities: Capacity[] = [];

    @Output()
    private removed = new EventEmitter<void>();

    public capacitiesOfUnicorn: Capacity[] = [];

    constructor(private unicornsService: UnicornsService) {
    }

    ngOnInit(): void {
        // if (!this.unicorn) {
        //     throw new Error(`T'as oublié la licorne !!!`);
        // }
        this.capacitiesOfUnicorn = this.capacities.filter((elem: Capacity) => {
            return this.unicorn.capacities.includes(elem.id);
        });
    }

    public deleteUnicorn(): void {
        this.unicornsService.delete(this.unicorn).subscribe(() => {
            this.removed.emit();
        });
    }

}
