import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectList'
import { Route } from 'react-router-dom'
import NavButton from '../atoms/Buttons/NavButton'


const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="auth-layout"
        >
            <Header />
            <div>Auth page</div>
            <NavButton 
                text="Go back to home"
                path="/"
            />
            {/* <ProjectList />
            <Route 
                path="/:projectId"
                render={({ match: { params: { projectId } } }) => 
                    <ProjectDashboard projectId={projectId} />
                }
            /> */}
        </div>
    )
}

export default DashboardLayout
