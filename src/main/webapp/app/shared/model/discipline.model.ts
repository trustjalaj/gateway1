import{IResource}from'app/shared/model//resource.model';
import {IProgram}from 'app/shared/model//program.model';

export interface IDiscipline {
id?: number;
disciplineName?: string;
disciplineDescription?: string;
disciplinePrice?: number;
resources?: IResource[];
programs?: IProgram[];
}

export class Discipline implements IDiscipline {
constructor(
        public id?: number,
        public disciplineName?: string,
        public disciplineDescription?: string,
        public disciplinePrice?: number,
        public resources?: IResource[],
        public programs?: IProgram[]
    ) {}
}
