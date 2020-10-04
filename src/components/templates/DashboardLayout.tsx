import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectList'
import { Route } from 'react-router-dom'


const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="dashboard-layout"
        >
            <Header />
            <ProjectList />
            <Route 
                path="/:projectId"
                render={({ match: { params: { projectId } } }) => 
                    <ProjectDashboard projectId={projectId} />
                }
            />
        </div>
    )
}

export default DashboardLayout
