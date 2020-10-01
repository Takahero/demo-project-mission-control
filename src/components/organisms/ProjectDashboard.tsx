import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'
import { mockProjects } from '../../utils/mockProjectsData'
import { projectDateRange } from '../../utils/date';
import { fullName } from '../../utils/name';

const mockProject = mockProjects[0]

const ProjectDashboard: React.FC = () => {
    return (
        <div
            data-testid="project-dashboard"
        >
            <DashboardProjectCard 
                name={mockProject.name}
                author={fullName(mockProject.author.firstName, mockProject.author.lastName)}
                dateRange={projectDateRange(mockProject.startDate, mockProject.endDate)}
                accomplishmentStatement={mockProject.accomplishmentStatement}
            />
            <RequiredResultsSection />
        </div>
    )
}

export default ProjectDashboard
