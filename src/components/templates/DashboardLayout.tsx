import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectListSection'
import {
    Route,
    Redirect
} from 'react-router-dom'
import ProjectForm from '../organisms/ProjectForm';
import { useSelector } from "react-redux"
import { authSelector, projectsSelector } from '../../store/selector'
import { isEmpty } from 'react-redux-firebase';

const DashboardLayout: React.FC = () => {
    const auth = useSelector(authSelector)
    const projects = useSelector(projectsSelector)

    let newestProjectId
    if (projects && projects.length > 0) {
        if (!isEmpty(auth)) {
            const newestUserProject: any = projects.find((project: any) => project.author.uid === auth.uid)
            newestProjectId = newestUserProject ? newestUserProject.id : projects[0].id
        } else {
            newestProjectId = projects[0].id
        }
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
            <ProjectList />
            <Route
                exact path="/project/:projectId"
                render={({ match: { params: { projectId } } }) =>
                    <ProjectDashboard projectId={projectId} />
                }
            />
            <Route
                exact path="/project/:projectId/edit"
                render={({ match: { params: { projectId } } }) =>
                    <ProjectForm projectId={projectId} />
                }
            />
            <Route
                path="/project/create"
                component={ProjectForm}
            />

        </div>
    )
}

export default DashboardLayout
