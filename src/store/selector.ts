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

export {
    authSelector,
    projectsSelector
}