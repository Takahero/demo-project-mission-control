import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '.'
import authProjectIdsArraySplitter from '../utils/authProjectsArraySplitter';
import { ProjectType, RequiredResultType } from '../utils/firestoreDocumentTypes';

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
    
export const isProjectAdminSelector = createSelector(
    uidSelector,
    projectSelectorById,
    (uid: string, project: ProjectType) => uid === project.author.uid
)

export const projectCardInfoSelectorById = createSelector(
    projectSelectorById,
(project) => (({ projectName, startDate, endDate, author }) => ({ projectName, startDate, endDate, author }))(project)
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

export const requiredResultIdsSelector = createSelector(
    requiredResultsSelector,
    (requiredResults) => requiredResults.map((requiredResult: RequiredResultType) => requiredResult.id )
)

export const requiredResultSelectorById = createSelector(
    requiredResultsSelector,
    (_, __, requiredResultId: string) => requiredResultId,
    (requiredResults, requiredResultId) => requiredResults.find( (requiredResult: any) => requiredResult.id === requiredResultId )
)