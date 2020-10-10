import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectList'
import {
    Route,
    Redirect
} from 'react-router-dom'
import ProjectForm from '../organisms/ProjectForm';
import { useSelector } from "react-redux"
import { projectsSelector } from '../../store/selector'

const DashboardLayout: React.FC = () => {
    const projects = useSelector(projectsSelector)

    let firstProjectId
    if (projects) {
        firstProjectId = Object.keys(projects)[0]
    }
    return (
        <div
            data-testid="dashboard-layout"
        >
            { firstProjectId &&
                <Redirect
                    exact from="/project"
                    to={`/project/${firstProjectId}`}
                />
            }

            <Header />
            <ProjectList />
            <Route
                path="/project/:projectId"
                render={({ match: { params: { projectId } } }) =>
                    <ProjectDashboard projectId={projectId} />
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
