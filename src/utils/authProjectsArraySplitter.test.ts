import { orderedProjects, leoUid, leoProjectId, leoProject2Id, mattProjectId, randomUid } from "./mockState"
import authProjectIdsArraySplitter from "./authProjectsArraySplitter"

const leoSortedProjects = {
    user: [
        leoProjectId,
        leoProject2Id
    ],
    other: [
        mattProjectId
    ]
}
const noUserProjects = {
    user: [],
    other: [
        mattProjectId,
        leoProjectId,
        leoProject2Id
    ]
}

it("returns user's projects array", () => {
    expect(authProjectIdsArraySplitter(orderedProjects, leoUid)).toEqual(leoSortedProjects)
})

it("returns empty user's projects array when unAuthed", () => {
    expect(authProjectIdsArraySplitter(orderedProjects, undefined)).toEqual(noUserProjects)
})

it("returns empty user's projects array when user has no project", () => {
    expect(authProjectIdsArraySplitter(orderedProjects, randomUid)).toEqual(noUserProjects)
})