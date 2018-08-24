import{Component, OnInit, OnDestroy}from '@angular/core';
import {ActivatedRoute, Router}from '@angular/router';

import {NgbActiveModal, NgbModal, NgbModalRef}from '@ng-bootstrap/ng-bootstrap';
import {JhiEventManager} from 'ng-jhipster';

import {IDiscipline }from 'app/shared/model/discipline.model';
import {DisciplineService}from './discipline.service';

@Component({
    selector: 'jhi-discipline-delete-dialog',
    templateUrl: './discipline-delete-dialog.component.html'
})
export class DisciplineDeleteDialogComponent {
    discipline: IDiscipline;

    constructor(private disciplineService: DisciplineService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.disciplineService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'disciplineListModification',
                content: 'Deleted an discipline'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-discipline-delete-popup',
    template: ''
})
export class DisciplineDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ discipline }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(DisciplineDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.discipline = discipline;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
