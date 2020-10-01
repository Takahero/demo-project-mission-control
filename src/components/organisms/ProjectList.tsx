import React from 'react'
import ProjectListTitle from '../atoms/Texts/ProjectListTitle';
import ProjectCard from '../molecules/ProjectCard'
import { mockProjects } from '../../utils/mockProjectsData'
import { shortFullName } from '../../utils/name';
import { projectDateRange } from '../../utils/date';



const ProjectList: React.FC = () => {
    const { author } = mockProjects[0]
    return (
        <div
            data-testid="project-list"
        >
            <ProjectListTitle />
            <ProjectCard 
                name={mockProjects[0].name}
                authorName={shortFullName(author.firstName, author.lastName )}
                dateRange={projectDateRange(mockProjects[0].startDate, mockProjects[0].endDate)}
            />
        </div>
    )
}

export default ProjectList