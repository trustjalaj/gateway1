import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable}from 'rxjs';
import {JhiAlertService}from 'ng-jhipster';

import {IResource}from 'app/shared/model/resource.model';
import {ResourceService}from './resource.service';
import {IDiscipline}from 'app/shared/model/discipline.model';
import {DisciplineService}from 'app/entities/discipline';
import {IProgram} from 'app/shared/model/program.model';
import {ProgramService}from 'app/entities/program';
import { ICourse}from 'app/shared/model/course.model';
import {CourseService} from 'app/entities/course';
import {ILesson}from 'app/shared/model/lesson.model';
import { LessonService}from 'app/entities/lesson';

@Component({
    selector: 'jhi-resource-update',
    templateUrl: './resource-update.component.html'
})
export class ResourceUpdateComponent implements OnInit {
    private _resource: IResource;
    isSaving: boolean;

    disciplines: IDiscipline[];

    programs: IProgram[];

    courses: ICourse[];

    lessons: ILesson[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private resourceService: ResourceService,
        private disciplineService: DisciplineService,
        private programService: ProgramService,
        private courseService: CourseService,
        private lessonService: LessonService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ resource }) => {
            this.resource = resource;
        });
        this.disciplineService.query().subscribe(
            (res: HttpResponse<IDiscipline[]>) => {
                this.disciplines = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.programService.query().subscribe(
            (res: HttpResponse<IProgram[]>) => {
                this.programs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.courseService.query().subscribe(
            (res: HttpResponse<ICourse[]>) => {
                this.courses = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.lessonService.query().subscribe(
            (res: HttpResponse<ILesson[]>) => {
                this.lessons = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.resource.id !== undefined) {
            this.subscribeToSaveResponse(this.resourceService.update(this.resource));
        } else {
            this.subscribeToSaveResponse(this.resourceService.create(this.resource));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IResource>>) {
        result.subscribe((res: HttpResponse<IResource>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackDisciplineById(index: number, item: IDiscipline) {
        return item.id;
    }

    trackProgramById(index: number, item: IProgram) {
        return item.id;
    }

    trackCourseById(index: number, item: ICourse) {
        return item.id;
    }

    trackLessonById(index: number, item: ILesson) {
        return item.id;
    }
    get resource() {
        return this._resource;
    }

    set resource(resource: IResource) {
        this._resource = resource;
    }
}
