import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    @Input()
    public numberOfUnicorns = 0;

    @Input()
    public ageTotal = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
