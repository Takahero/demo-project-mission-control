import React from 'react'
import Header from '../organisms/Header'
import ProjectList from '../organisms/ProjectList'

const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="dashboard-layout"
        >
            <Header />
            <ProjectList />
        </div>
    )
}

export default DashboardLayout
