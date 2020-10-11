import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'

const authSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth
)

const projectsSelector = createSelector(
    (state: RootState) => state.firestore.ordered.projects,
    projects => projects
)

const requiredResultsSelector = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered,
    (state: RootState, projectId: string) => projectId,
    (ordered, projectId) => ordered[`requiredResults/${projectId}`]
)

export {
    authSelector,
    projectsSelector,
    requiredResultsSelector
}