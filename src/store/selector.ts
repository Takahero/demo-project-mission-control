import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'
import authProjectIdsArraySplitter from '../utils/authProjectsArraySplitter';
import { ProjectType } from '../utils/firestoreDocumentTypes';

export const authSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth
)

export const isAuthedSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => !auth.isEmpty
)

export const uidSelector = createSelector(
    (state: RootState) => state.firebase.auth,
    auth => auth.uid
)

export const projectsSelector = createSelector(
    (state: RootState) => state.firestore.ordered.projects,
    projects => projects
    )

export const projectSelectorById = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered.projects,
    (_, projectId: string) => projectId,
    (projects, projectId) => projects.find( (project: any) => project.id === projectId )
)

export const newestProjectIdSelector = createSelector(
    projectsSelector,
    uidSelector,
    (projects, uid) => {
        let newestProject
        if (uid) {
            newestProject = projects.find((project: ProjectType) => project.author.uid === uid)
        } else {
            newestProject = projects[0]
        }
        return newestProject.id
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

export const requiredResultsSelector = createSelector(
    (state: RootState, projectId: string) => state.firestore.ordered,
    (_, projectId: string) => projectId,
    (ordered, projectId) => ordered[`requiredResults/${projectId}`]
)

export const requiredResultSelectorById = createSelector(
    (state: RootState, projectId: string, requiredResultId: string) => state.firestore.ordered,
    (_, projectId: string, __) => projectId,
    (_, __, requiredResultId: string) => requiredResultId,
    (ordered, projectId, requiredResultId) => ordered[`requiredResults/${projectId}`].find( (requiredResult: any) => requiredResult.id === requiredResultId )
)