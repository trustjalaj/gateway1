import{Component, OnInit, OnDestroy}from '@angular/core';
import {HttpErrorResponse, HttpResponse}from '@angular/common/http';
import {Subscription}from 'rxjs';
import {JhiEventManager, JhiAlertService}from 'ng-jhipster';

import {IDiscipline}from 'app/shared/model/discipline.model';
import {Principal}from 'app/core';
import {DisciplineService}from './discipline.service';

@Component({
    selector: 'jhi-discipline',
    templateUrl: './discipline.component.html'
})
export class DisciplineComponent implements OnInit, OnDestroy {
    disciplines: IDiscipline[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private disciplineService: DisciplineService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.disciplineService.query().subscribe(
            (res: HttpResponse<IDiscipline[]>) => {
                this.disciplines = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInDisciplines();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDiscipline) {
        return item.id;
    }

    registerChangeInDisciplines() {
        this.eventSubscriber = this.eventManager.subscribe('disciplineListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
