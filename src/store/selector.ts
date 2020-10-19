import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "."
import authProjectIdsArraySplitter from "../utils/authProjectsArraySplitter"
import {
    ProjectType,
    RequiredResultType,
    ToDoType
} from "../utils/firestoreDocumentTypes"
import { sortToDosByDate } from "../utils/toDosFirestore"

// Auth selectors

export const isAuthSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth.isLoaded
)

export const isAuthedSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => !auth.isEmpty
)

export const uidSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth.uid
)

export const profileSelector = createSelector(
    (state: RootState) => state.firebase.profile,
    profile => profile
)

// Project selectors
export const projectsSelector = createSelector(
    (state: RootState) => state.firestore.ordered.projects,
    projects => projects
)

export const projectSelectorById = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered.projects,
    (_, projectId: string) => projectId,
    (projects, projectId) => projects.find( (project: ProjectType) => project.id === projectId )
)

export const isProjectAdminSelector = createSelector(
    uidSelector,
    projectSelectorById,
    (uid: string, project: ProjectType) => project && uid === project.author.uid
)

export const projectCardInfoSelectorById = createSelector(
    projectSelectorById,
    (project) => project && (({ projectName, startDate, endDate, author }) => ({ projectName, startDate, endDate, author }))(project)
)

export const newestProjectIdSelector = createSelector(
    projectsSelector,
    uidSelector,
    (projects, uid) => {
        if (uid) {
            const newUserProject = projects.find((project: ProjectType) => project.author.uid === uid)
            if (newUserProject) return newUserProject.id
        }
        return projects[0].id
    }
)

export const projectIdsOrderedByAuthSelector = createSelector(
    projectsSelector,
    uidSelector,
    (projects, uid) => authProjectIdsArraySplitter(projects, uid)
)

export const userProjectIdsSelector = createSelector(
    projectIdsOrderedByAuthSelector,
    (sortedProjectObj) => sortedProjectObj.user
)

export const otherProjectIdsSelector = createSelector(
    projectIdsOrderedByAuthSelector,
    (sortedProjectObj) => sortedProjectObj.other
)

// RequiredResult selectors

export const requiredResultsSelector = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered,
    (_, projectId: string) => projectId,
    (ordered, projectId) => ordered && ordered[`requiredResults/${projectId}`]
)

export const requiredResultIdsSelector = createSelector(
    requiredResultsSelector,
    (requiredResults) => requiredResults && requiredResults.map((requiredResult: RequiredResultType) => requiredResult.id )
)

export const requiredResultSelectorById = createSelector(
    requiredResultsSelector,
    (_, __, requiredResultId: string) => requiredResultId,
    (requiredResults, requiredResultId) => requiredResults && requiredResults.find( (requiredResult: RequiredResultType) => requiredResult.id === requiredResultId )
)

// ToDo selectors

export const toDosIdSelector = createSelector(
    requiredResultSelectorById,
    (requiredResult: RequiredResultType) => {
        if (requiredResult) {
            const toDos = requiredResult.toDos
            if (toDos) {
                const sortedToDos = sortToDosByDate(toDos)
                const toDoIds = sortedToDos?.map((toDo: ToDoType) => toDo.id)
                return toDoIds
            }
        } else return null
    }
)

export const toDosSelector = createSelector(
    requiredResultSelectorById,
    (requiredResult: RequiredResultType) => requiredResult.toDos
)

export const toDoSelectorById = createSelector(
    toDosSelector,
    (_, __, ___, toDoId: string) => toDoId,
    (toDos: ToDoType[] | undefined, toDoId: string) => toDos && toDos.find( (toDo: ToDoType) => toDo.id === toDoId )
)