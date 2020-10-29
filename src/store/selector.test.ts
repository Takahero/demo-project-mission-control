import * as selectors from './selector'
import * as mockState from '../utils/mockState'
import { leoSortedProjects, noUserProjects } from "../utils/authProjectsArraySplitter.test"

// @ts-ignore is applied for some tests
// This is mainly due to "createdAt" object has keys that are not within mockState

// Auth selectors

describe("isAuthedSelector", () => {
    it("returns true when authed", () => {
        // @ts-ignore
        expect(selectors.isAuthedSelector(mockState.authedState)).toBeTruthy()
    })

    it("returns false when unAuthed", () => {
        // @ts-ignore
        expect(selectors.isAuthedSelector(mockState.unAuthedState)).toBeFalsy()
    })
})

describe("uidSelector", () => {
    it("returns uid string", () => {
        // @ts-ignore
        expect(selectors.uidSelector(mockState.authedState)).toBe(mockState.leoUid)
    })
})

// Project selectors

describe("projectsSelector", () => {
    it("returns ordered projects object", () => {
        // @ts-ignore
        expect(selectors.projectsSelector(mockState.authedState)).toEqual(mockState.orderedProjects)
    })
})

describe("projectSelectorById", () => {
    it("returns project object selected by id", () => {
        expect(selectors.projectSelectorById.resultFunc(mockState.orderedProjects, mockState.leoProjectId)).toEqual(mockState.leoProject)
    })
})

describe("isProjectAdminSelector", () => {
    it("returns true when project author is authed", () => {
        // @ts-ignore
        expect(selectors.isProjectAdminSelector.resultFunc(mockState.leoUid, mockState.leoProject)).toBeTruthy()
    })

    it("returns true when project author is not authed", () => {
        // @ts-ignore
        expect(selectors.isProjectAdminSelector.resultFunc(mockState.mattUid, mockState.leoProject)).toBeFalsy()
    })
})

describe("projectCardInfoSelectorById", () => {
    it("returns project info for ProjectCard", () => {
        expect(selectors.projectCardInfoSelectorById.resultFunc(mockState.leoProject)).toEqual({
            projectName: "Win Academy Award",
            author: {
                uid:"S2RXV1Zi1ld6P8sNqnFRdo38oLV2",
                firstName: "Leo",
                lastName: "Decaprio",
            },
            startDate: "2020-10-06",
            endDate: "2020-10-30"
        })
    })
})

describe("newestProjectIdSelector", () => {
    it("returns user's newest project id string", () => {
        expect(selectors.newestProjectIdSelector.resultFunc(mockState.orderedProjects, mockState.leoUid)).toBe(mockState.leoProjectId)
    })

    it("returns newest project id string when user doesn't have projects", () => {
        expect(selectors.newestProjectIdSelector.resultFunc(mockState.orderedProjects, mockState.randomUid)).toBe(mockState.mattProjectId)
    })
})

// projectIdsOrderedByAuthSelector is tested in authProjectIdsArraySplitter.test as it would return same results

describe("userProjectIdsSelector", () => {
    it("returns user's projectIds array when authed", () => {
        expect(selectors.userProjectIdsSelector.resultFunc(leoSortedProjects)).toEqual([
            mockState.leoProjectId,
            mockState.leoProject2Id
        ])
    })

    it("returns empty array when user has no project", () => {
        expect(selectors.userProjectIdsSelector.resultFunc(noUserProjects)).toEqual([])
    })
})

describe("otherProjectIdsSelector", () => {
    it("returns other's projectIds array when authed", () => {
        expect(selectors.otherProjectIdsSelector.resultFunc(leoSortedProjects)).toEqual([
            mockState.mattProjectId,
        ])
    })

    it("returns all projects array when user has no project", () => {
        expect(selectors.otherProjectIdsSelector.resultFunc(noUserProjects)).toEqual([
            mockState.mattProjectId,
            mockState.leoProjectId,
            mockState.leoProject2Id
        ])
    })
})

// RequiredResult selectors

describe("requiredResultsSelector", () => {
    it("returns ordered requiredResults", () => {
        expect(selectors.requiredResultsSelector.resultFunc(mockState.ordered, mockState.mattProjectId)).toEqual(mockState.mattProjectRequiredResults)
    })

    it("returns false when project has no requiredResults", () => {
        expect(selectors.requiredResultsSelector.resultFunc(mockState.ordered, mockState.leoProject2Id)).toBeFalsy()
    })
})

describe("requiredResultIdsSelector", () => {
    it("returns requiredResults ids", () => {
        expect(selectors.requiredResultIdsSelector.resultFunc(mockState.mattProjectRequiredResults)).toEqual([ mockState.mattProjectRequiredResultId ])
    })
})

describe("requiredResultSelectorById", () => {
    it("returns requiredResult", () => {
        expect(selectors.requiredResultSelectorById.resultFunc(mockState.mattProjectRequiredResults, mockState.mattProjectRequiredResultId)).toEqual(mockState.mattProjectRequiredResult)
    })
})

// ToDo selectors

describe("toDosSelector", () => {
    it("returns toDos", () => {
        // @ts-ignore
        expect(selectors.toDosSelector.resultFunc(mockState.mattProjectRequiredResult)).toEqual(mockState.mattToDos)
    })
})

describe("toDoIdsSelector", () => {
    it("returns toDoIds", () => {
        // @ts-ignore
        expect(selectors.toDoIdsSelector.resultFunc(mockState.mattToDos)).toEqual([mockState.mattToDoId])
    })
})

describe("toDoSelectorById", () => {
    it("returns toDo", () => {
        // @ts-ignore
        expect(selectors.toDoSelectorById.resultFunc(mockState.mattToDos, mockState.mattToDoId)).toEqual(mockState.mattToDo)
    })
})