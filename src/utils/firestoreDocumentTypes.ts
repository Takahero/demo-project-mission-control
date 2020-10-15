export interface ToDoType {
    id: string;
    name: string;
    completed: boolean;
    createdAt: Date;
}

export interface RequiredResultType {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    toDos?: ToDoType[];
    completed: boolean;
    createdAt: Date;
}

export interface ProjectType {
    id: string;
    projectName: string;
    accomplishmentStatement: string;
    startDate: string;
    endDate: string;
    author: {
        uid: string,
        firstName: string,
        lastName: string,
    };
    completed: boolean;
    createdAt: Date;
}