import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable}from 'rxjs';
import {JhiAlertService}from 'ng-jhipster';

import {IDiscipline}from 'app/shared/model/discipline.model';
import {DisciplineService}from './discipline.service';
import {IProgram}from 'app/shared/model/program.model';
import {ProgramService}from 'app/entities/program';

@Component({
    selector: 'jhi-discipline-update',
    templateUrl: './discipline-update.component.html'
})
export class DisciplineUpdateComponent implements OnInit {
    private _discipline: IDiscipline;
    isSaving: boolean;

    programs: IProgram[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private disciplineService: DisciplineService,
        private programService: ProgramService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ discipline }) => {
            this.discipline = discipline;
        });
        this.programService.query().subscribe(
            (res: HttpResponse<IProgram[]>) => {
                this.programs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.discipline.id !== undefined) {
            this.subscribeToSaveResponse(this.disciplineService.update(this.discipline));
        } else {
            this.subscribeToSaveResponse(this.disciplineService.create(this.discipline));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IDiscipline>>) {
        result.subscribe((res: HttpResponse<IDiscipline>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackProgramById(index: number, item: IProgram) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get discipline() {
        return this._discipline;
    }

    set discipline(discipline: IDiscipline) {
        this._discipline = discipline;
    }
}
