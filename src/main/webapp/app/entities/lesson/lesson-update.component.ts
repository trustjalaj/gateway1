import{Component, OnInit}from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable}from 'rxjs';
import {JhiAlertService}from 'ng-jhipster';

import {ILesson}from 'app/shared/model/lesson.model';
import {LessonService}from './lesson.service';
import {ICourse}from 'app/shared/model/course.model';
import {CourseService}from 'app/entities/course';

@Component({
    selector: 'jhi-lesson-update',
    templateUrl: './lesson-update.component.html'
})
export class LessonUpdateComponent implements OnInit {
    private _lesson: ILesson;
    isSaving: boolean;

    courses: ICourse[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private lessonService: LessonService,
        private courseService: CourseService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ lesson }) => {
            this.lesson = lesson;
        });
        this.courseService.query().subscribe(
            (res: HttpResponse<ICourse[]>) => {
                this.courses = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.lesson.id !== undefined) {
            this.subscribeToSaveResponse(this.lessonService.update(this.lesson));
        } else {
            this.subscribeToSaveResponse(this.lessonService.create(this.lesson));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ILesson>>) {
        result.subscribe((res: HttpResponse<ILesson>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
    get lesson() {
        return this._lesson;
    }

    set lesson(lesson: ILesson) {
        this._lesson = lesson;
    }
}
