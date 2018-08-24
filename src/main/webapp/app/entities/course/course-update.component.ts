import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable}from 'rxjs';
import {JhiAlertService}from 'ng-jhipster';

import {ICourse}from 'app/shared/model/course.model';
import {CourseService}from './course.service';
import {ILesson}from 'app/shared/model/lesson.model';
import {LessonService}from 'app/entities/lesson';
import {IProgram} from 'app/shared/model/program.model';
import {ProgramService}from 'app/entities/program';

@Component({
    selector: 'jhi-course-update',
    templateUrl: './course-update.component.html'
})
export class CourseUpdateComponent implements OnInit {
    private _course: ICourse;
    isSaving: boolean;

    lessons: ILesson[];

    programs: IProgram[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private courseService: CourseService,
        private lessonService: LessonService,
        private programService: ProgramService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ course }) => {
            this.course = course;
        });
        this.lessonService.query().subscribe(
            (res: HttpResponse<ILesson[]>) => {
                this.lessons = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
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
        if (this.course.id !== undefined) {
            this.subscribeToSaveResponse(this.courseService.update(this.course));
        } else {
            this.subscribeToSaveResponse(this.courseService.create(this.course));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICourse>>) {
        result.subscribe((res: HttpResponse<ICourse>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackLessonById(index: number, item: ILesson) {
        return item.id;
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
    get course() {
        return this._course;
    }

    set course(course: ICourse) {
        this._course = course;
    }
}
