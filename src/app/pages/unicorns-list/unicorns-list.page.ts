import {Component, OnInit} from '@angular/core';
import {Unicorn} from '../../shared/models/unicorn.model';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {CapacitiesService} from '../../shared/services/capacities.service';
import {Capacity} from '../../shared/models/capacity.model';

@Component({
    selector: 'app-unicorns-list',
    templateUrl: './unicorns-list.page.html',
    styleUrls: ['./unicorns-list.page.scss']
})
export class UnicornsListPageComponent implements OnInit {

    public listUnicorns: Unicorn[] = [];
    public listCapacities: Capacity[] = [];
    public totalAgeUnicorn = 0;

    constructor(unicornsService: UnicornsService, capacitiesService: CapacitiesService) {
        unicornsService.getAllWithCapacitiesLabels2().subscribe((data: Unicorn[]) => {
            this.listUnicorns = data;
        });

        capacitiesService.getAll().subscribe((datas: Capacity[]) => {
            this.listCapacities = datas;
        });
    }

    ngOnInit(): void {
        this.generateTotalAgeUnicorn();
    }

    public removeUnicornFromList(unicornToDelete: Unicorn) {
        this.listUnicorns = this.listUnicorns.filter((unicorn: Unicorn) => unicornToDelete.id !== unicorn.id);
    }

    private generateTotalAgeUnicorn(): void {
        this.totalAgeUnicorn = 0;
        this.listUnicorns.forEach((unicorn: Unicorn) => {
            this.totalAgeUnicorn += new Date().getFullYear() - unicorn.birthyear;
        });
    }


}
