import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'
import { projectDateRange } from '../../utils/date';
import { fullName } from '../../utils/name';
import { mockProjects } from '../../utils/mockProjectsData';

interface Props {
    projectId: string;
}

const ProjectDashboard: React.FC<Props> = ({ projectId }) => {
    const project = mockProjects.find( mockProject => mockProject.id === projectId )
    if (project) {
        return (
            <div
                data-testid="project-dashboard"
            >
                <DashboardProjectCard 
                    name={project.name}
                    author={fullName(project.author.firstName, project.author.lastName)}
                    dateRange={projectDateRange(project.startDate, project.endDate)}
                    accomplishmentStatement={project.accomplishmentStatement}
                />
                <RequiredResultsSection 
                    requiredResults={project.requiredResults}
                />
            </div>
        )
    } 
    return <></>
}

export default ProjectDashboard
