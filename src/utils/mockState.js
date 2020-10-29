export const randomUid = "RifrsbXaPQeeT6gb1jRn7qLxV0r1"

export const leoUid = "S2RXV1Zi1ld6P8sNqnFRdo38oLV2"
export const leoProjectId = "GP1RvGJl9iUoUj7U4tOT"
export const leoProject = {
    id: leoProjectId,
    projectName: "Win Academy Award",
    author: {
        uid: leoUid,
        firstName: "Leo",
        lastName: "Decaprio",
    },
    createdAt: {
        seconds: 1602935126,
        nanoseconds: 924000000,
    },
    accomplishmentStatement: "This thing is totally coming up!",
    startDate: "2020-10-06",
    endDate: "2020-10-30",
    completed: true,
}

export const leoProject2Id = "RhdcSWldXZhZnYg3PpBS"
export const leoProject2 = {
    id: leoProject2Id,
    projectName: "Get into life long relationship",
    author: {
        uid: leoUid,
        firstName: "Leo",
        lastName: "Decaprio",
    },
    createdAt: {
        seconds: 1602376351,
        nanoseconds: 652000000,
    },
    accomplishmentStatement: "This is way better than any life in movies I've played!!",
    startDate: "2020-09-28",
    endDate: "2020-11-06",
    completed: false,
}

export const mattUid = "KDT3iyxAWjgMsSqoqGvY5cNYaCF2"
export const mattProjectId = "uoQYjq1ialrvicXfByJu"
export const mattProject = {
    id: mattProjectId,
    projectName: "Highjack Jimmy Kimmel Live!",
    author: {
        uid: mattUid,
        firstName: "Matt",
        lastName: "Damon",
    },
    createdAt: {
        seconds: 1602376351,
        nanoseconds: 652000000,
    },
    accomplishmentStatement: "Yessss! I finally screw that bastard up!",
    startDate: "2020-09-28",
    endDate: "2020-11-06",
    completed: true,
}

export const mattProjectRequiredResultId = "69V71oEuHJ8lOZDEufkU"
export const mattToDoId = "FwOfB15QAK9qgJvXCCf4I"
export const mattToDo = {
    completed: true,
    name: "10 pushups a day",
    id: mattToDoId,
}
export const mattToDos = [
    mattToDo,
]
export const mattProjectRequiredResult = {
    id: mattProjectRequiredResultId,
    name: "100 pushups",
    startDate: "2020-10-06",
    endDate: "2020-10-29",
    completed: true,
    toDos: mattToDos
}

export const mattProjectRequiredResults = [
    mattProjectRequiredResult,
]

export const orderedProjects = [
    mattProject,
    leoProject,
    leoProject2,
]

export const ordered = {
    projects: orderedProjects,
    "requiredResults/uoQYjq1ialrvicXfByJu": mattProjectRequiredResults
}

export const authedState = {
    firebase: {
        auth: {
            uid: leoUid,
            isEmpty: false
        }
    },
    firestore: {
        ordered: {
            projects: orderedProjects,
        }
    }
}

export const unAuthedState = {
    firebase: {
        auth: {
            isEmpty: true
        }
    }
}