import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';

import {IDiscipline}from 'app/shared/model/discipline.model';

@Component({
    selector: 'jhi-discipline-detail',
    templateUrl: './discipline-detail.component.html'
})
export class DisciplineDetailComponent implements OnInit {
    discipline: IDiscipline;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ discipline }) => {
            this.discipline = discipline;
        });
    }

    previousState() {
        window.history.back();
    }
}
