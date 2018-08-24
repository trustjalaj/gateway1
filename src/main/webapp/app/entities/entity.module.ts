import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {Gateway1DisciplineModule}from './discipline/discipline.module';
import { Gateway1ProgramModule}from './program/program.module';
import {Gateway1CourseModule}from './course/course.module';
import {Gateway1LessonModule}from './lesson/lesson.module';
import {Gateway1ResourceModule} from './resource/resource.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Gateway1DisciplineModule,
        Gateway1ProgramModule,
        Gateway1CourseModule,
        Gateway1LessonModule,
        Gateway1ResourceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway1EntityModule {}
