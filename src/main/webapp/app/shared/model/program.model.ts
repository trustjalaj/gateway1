import{IResource}from'app/shared/model//resource.model';
import {ICourse}from 'app/shared/model//course.model';
import {IDiscipline}from 'app/shared/model//discipline.model';

export interface IProgram {
id?: number;
programName?: string;
programDescription?: string;
programPrice?: number;
resources?: IResource[];
courses?: ICourse[];
disciplines?: IDiscipline[];
}

export class Program implements IProgram {
constructor(
        public id?: number,
        public programName?: string,
        public programDescription?: string,
        public programPrice?: number,
        public resources?: IResource[],
        public courses?: ICourse[],
        public disciplines?: IDiscipline[]
    ) {}
}
