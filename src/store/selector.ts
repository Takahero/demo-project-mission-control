import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'

const authSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth
)

const isAuthedSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => !auth.isEmpty
)

const projectsSelector = createSelector(
    (state: RootState) => state.firestore.ordered.projects,
    projects => projects
)

const projectSelectorById = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered.projects,
    (state: RootState, projectId: string) => projectId,
    (projects, projectId) => projects.find( (project: any) => project.id === projectId )
)

const requiredResultsSelector = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered,
    (state: RootState, projectId: string) => projectId,
    (ordered, projectId) => ordered[`requiredResults/${projectId}`]
)

const requiredResultSelectorById = createSelector(
    (state: RootState, projectId: string, requiredResultId: string) => state.firestore.ordered,
    (state: RootState, projectId: string, requiredResultId: string) => projectId,
    (state: RootState, projectId: string, requiredResultId: string) => requiredResultId,
    (ordered, projectId, requiredResultId) => ordered[`requiredResults/${projectId}`].find( (requiredResult: any) => requiredResult.id === requiredResultId )
)

export {
    authSelector,
    isAuthedSelector,
    projectsSelector,
    projectSelectorById,
    requiredResultsSelector,
    requiredResultSelectorById
}