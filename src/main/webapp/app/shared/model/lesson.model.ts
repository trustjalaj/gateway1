import{IResource}from'app/shared/model//resource.model';
import {ICourse}from 'app/shared/model//course.model';

export const enum Language {
ENGLISH = 'ENGLISH',
SPANISH = 'SPANISH',
HUNGARIAN = 'HUNGARIAN',
GERMAN = 'GERMAN'
}

export interface ILesson {
id?: number;
lessonTitle?: string;
lessonDescription?: string;
language?: Language;
resources?: IResource[];
courses?: ICourse[];
}

export class Lesson implements ILesson {
constructor(
        public id?: number,
        public lessonTitle?: string,
        public lessonDescription?: string,
        public language?: Language,
        public resources?: IResource[],
        public courses?: ICourse[]
    ) {}
}
