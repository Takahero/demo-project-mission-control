import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectList'
import { 
    Route,
    Redirect
} from 'react-router-dom'
import { mockProjects } from '../../utils/mockProjectsData';

const firstProjectId = mockProjects[0].id

const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="dashboard-layout"
        >
            <Header />
            <ProjectList />
            <Route 
                path="/project/:projectId"
                render={({ match: { params: { projectId } } }) => 
                    <ProjectDashboard projectId={projectId} />
                }
            />
            <Redirect
                exact from="/project"
                to={`/project/${firstProjectId}`}
            />
        </div>
    )
}

export default DashboardLayout
