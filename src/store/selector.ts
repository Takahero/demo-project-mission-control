import { createSelector } from '@reduxjs/toolkit'

const authSelector = createSelector(
    (state: any) => state.firebase.auth,
    auth => auth
)

const projectsSelector = createSelector(
    (state: any) => state.firestore.data.projects,
    projects => projects
)

export {
    authSelector,
    projectsSelector
}