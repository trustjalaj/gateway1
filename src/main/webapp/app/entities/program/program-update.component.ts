import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable}from 'rxjs';
import {JhiAlertService}from 'ng-jhipster';

import {IProgram}from 'app/shared/model/program.model';
import {ProgramService}from './program.service';
import {ICourse}from 'app/shared/model/course.model';
import {CourseService}from 'app/entities/course';
import {IDiscipline} from 'app/shared/model/discipline.model';
import {DisciplineService}from 'app/entities/discipline';

@Component({
    selector: 'jhi-program-update',
    templateUrl: './program-update.component.html'
})
export class ProgramUpdateComponent implements OnInit {
    private _program: IProgram;
    isSaving: boolean;

    courses: ICourse[];

    disciplines: IDiscipline[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private programService: ProgramService,
        private courseService: CourseService,
        private disciplineService: DisciplineService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ program }) => {
            this.program = program;
        });
        this.courseService.query().subscribe(
            (res: HttpResponse<ICourse[]>) => {
                this.courses = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.disciplineService.query().subscribe(
            (res: HttpResponse<IDiscipline[]>) => {
                this.disciplines = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.program.id !== undefined) {
            this.subscribeToSaveResponse(this.programService.update(this.program));
        } else {
            this.subscribeToSaveResponse(this.programService.create(this.program));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IProgram>>) {
        result.subscribe((res: HttpResponse<IProgram>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackCourseById(index: number, item: ICourse) {
        return item.id;
    }

    trackDisciplineById(index: number, item: IDiscipline) {
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
    get program() {
        return this._program;
    }

    set program(program: IProgram) {
        this._program = program;
    }
}
