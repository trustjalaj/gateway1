import{IResource}from'app/shared/model//resource.model';
import {ILesson}from 'app/shared/model//lesson.model';
import {IProgram}from 'app/shared/model//program.model';

export const enum Level {
NOVICE = 'NOVICE',
BEGINNER = 'BEGINNER',
INTERMEDIATE = 'INTERMEDIATE',
ADVANCED = 'ADVANCED',
PROFESSIONAL = 'PROFESSIONAL'
}

export interface ICourse {
id?: number;
courseTitle?: string;
courseDescription?: string;
coursePrice?: number;
courseLevel?: Level;
resources?: IResource[];
lessons?: ILesson[];
programs?: IProgram[];
}

export class Course implements ICourse {
constructor(
        public id?: number,
        public courseTitle?: string,
        public courseDescription?: string,
        public coursePrice?: number,
        public courseLevel?: Level,
        public resources?: IResource[],
        public lessons?: ILesson[],
        public programs?: IProgram[]
    ) {}
}
