import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'

const ProjectDashboard: React.FC = () => {
    return (
        <div
            data-testid="project-dashboard"
        >
            <DashboardProjectCard />
        </div>
    )
}

export default ProjectDashboard
