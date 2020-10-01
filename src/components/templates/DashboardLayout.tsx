import React from 'react'
import Header from '../organisms/Header'
import ProjectDashboard from '../organisms/ProjectDashboard'
import ProjectList from '../organisms/ProjectList'

const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="dashboard-layout"
        >
            <Header />
            <ProjectList />
            <ProjectDashboard />
        </div>
    )
}

export default DashboardLayout
