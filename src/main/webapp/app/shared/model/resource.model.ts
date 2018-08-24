exportconstenumResourceType {
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    TUTORIAL = 'TUTORIAL',
    PAGE = 'PAGE',
    PARTIAL = 'PARTIAL',
    TOOL = 'TOOL'
}

exportinterfaceIResource {
    id?: number;
resourceName?: string;
resourceDescription?: string;
resourceURL?: string;
resourcePreviewImage?: string;
resourceType?: ResourceType;
weight?: number;
disciplineId?: number;
programId?: number;
courseId?: number;
lessonId?: number;
}

export class Resource implements IResource {
constructor(
        public id?: number,
        public resourceName?: string,
        public resourceDescription?: string,
        public resourceURL?: string,
        public resourcePreviewImage?: string,
        public resourceType?: ResourceType,
        public weight?: number,
        public disciplineId?: number,
        public programId?: number,
        public courseId?: number,
        public lessonId?: number
    ) {}
}
