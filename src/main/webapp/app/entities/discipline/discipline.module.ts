import{NgModule, CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import {RouterModule}from '@angular/router';

import {Gateway1SharedModule}from 'app/shared';
import {
DisciplineComponent,
DisciplineDetailComponent,
DisciplineUpdateComponent,
DisciplineDeletePopupComponent,
DisciplineDeleteDialogComponent,
disciplineRoute,
disciplinePopupRoute
}from './';

const ENTITY_STATES = [...disciplineRoute, ...disciplinePopupRoute];

@NgModule({
    imports: [Gateway1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DisciplineComponent,
        DisciplineDetailComponent,
        DisciplineUpdateComponent,
        DisciplineDeleteDialogComponent,
        DisciplineDeletePopupComponent
    ],
    entryComponents: [DisciplineComponent, DisciplineUpdateComponent, DisciplineDeleteDialogComponent, DisciplineDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway1DisciplineModule {}
