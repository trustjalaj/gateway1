import{NgModule, CUSTOM_ELEMENTS_SCHEMA}from '@angular/core';
import {RouterModule}from '@angular/router';

import {Gateway1SharedModule}from 'app/shared';
import {
ResourceComponent,
ResourceDetailComponent,
ResourceUpdateComponent,
ResourceDeletePopupComponent,
ResourceDeleteDialogComponent,
resourceRoute,
resourcePopupRoute
}from './';

const ENTITY_STATES = [...resourceRoute, ...resourcePopupRoute];

@NgModule({
    imports: [Gateway1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ResourceComponent,
        ResourceDetailComponent,
        ResourceUpdateComponent,
        ResourceDeleteDialogComponent,
        ResourceDeletePopupComponent
    ],
    entryComponents: [ResourceComponent, ResourceUpdateComponent, ResourceDeleteDialogComponent, ResourceDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway1ResourceModule {}
