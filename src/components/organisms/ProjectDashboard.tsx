import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'

const ProjectDashboard: React.FC = () => {
    return (
        <div
            data-testid="project-dashboard"
        >
            <DashboardProjectCard />
            <RequiredResultsSection />
        </div>
    )
}

export default ProjectDashboard
