import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectListSection from '../organisms/ProjectListSection'
import {
    Route,
    Redirect
} from 'react-router-dom'
import ProjectForm from '../organisms/ProjectForm'
import { useSelector } from "react-redux"
import {
    authSelector,
    newestProjectIdSelector,
    projectsSelector
} from '../../store/selector'
import { isEmpty } from 'react-redux-firebase'
import { ProjectType } from '../../utils/firestoreDocumentTypes'

const DashboardLayout: React.FC = () => {
    const auth = useSelector(authSelector)
    const projects = useSelector(projectsSelector)
    const newestProjectId = useSelector(newestProjectIdSelector)

    const getProjectById: (projects: ProjectType[] , projectId: string) => ProjectType | undefined = (projects, projectId) => {
        return projects.find((project: ProjectType) => project.id === projectId)
    }

    return (
        <div
            data-testid="dashboard-layout"
        >
            { newestProjectId &&
                <Redirect
                    exact from="/project"
                    to={`/project/${newestProjectId}`}
                />
            }

            <Header />
            <ProjectListSection
                uid={auth.uid}
                projects={projects}
            />
            <Route
                exact path="/project/:projectId"
                render={({ match: { params: { projectId } } }) => {
                    let project = getProjectById(projects, projectId)!
                    if (project) {
                        return (
                            <ProjectDashboard
                                project={project}
                                authed={project.author.uid === auth.uid}
                            />
                        )
                    }
                }}
            />
            <Route
                exact path="/project/:projectId/edit"
                render={({ match: { params: { projectId } } }) => {
                    let project = getProjectById(projects, projectId)!
                    if (project) {
                        return (
                            <ProjectForm
                                project={project}
                                uid={auth.uid}
                            />
                        )
                    }
                }}
            />
            <Route
                path="/project/create"
                render={() => <ProjectForm uid={auth.uid} />}
            />
        </div>
    )
}

export default DashboardLayout