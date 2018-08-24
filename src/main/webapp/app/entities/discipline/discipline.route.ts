import{Injectable}from'@angular/core';
import {HttpResponse }from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes}from '@angular/router';
import {UserRouteAccessService}from 'app/core';
import {of}from 'rxjs';
import {map}from 'rxjs/operators';
import {Discipline}from 'app/shared/model/discipline.model';
import {DisciplineService}from './discipline.service';
import {DisciplineComponent }from './discipline.component';
import {DisciplineDetailComponent}from './discipline-detail.component';
import {DisciplineUpdateComponent}from './discipline-update.component';
import {DisciplineDeletePopupComponent}from './discipline-delete-dialog.component';
import {IDiscipline}from 'app/shared/model/discipline.model';

@Injectable({ providedIn: 'root' })
export class DisciplineResolve implements Resolve<IDiscipline> {
    constructor(private service: DisciplineService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((discipline: HttpResponse<Discipline>) => discipline.body));
        }
        return of(new Discipline());
    }
}

export const disciplineRoute: Routes = [
    {
        path: 'discipline',
        component: DisciplineComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateway1App.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'discipline/:id/view',
        component: DisciplineDetailComponent,
        resolve: {
            discipline: DisciplineResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateway1App.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'discipline/new',
        component: DisciplineUpdateComponent,
        resolve: {
            discipline: DisciplineResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateway1App.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'discipline/:id/edit',
        component: DisciplineUpdateComponent,
        resolve: {
            discipline: DisciplineResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateway1App.discipline.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const disciplinePopupRoute: Routes = [
    {
        path: 'discipline/:id/delete',
        component: DisciplineDeletePopupComponent,
        resolve: {
            discipline: DisciplineResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'gateway1App.discipline.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
