import React from 'react'
import ProjectListTitle from '../atoms/Texts/ProjectListTitle';
import ProjectCard from '../molecules/ProjectCard'
import { mockProjects } from '../../utils/mockProjectsData'
import { shortFullName } from '../../utils/name';
import { projectDateRange } from '../../utils/date';



const ProjectList: React.FC = () => {
    return (
        <div
            data-testid="project-list"
        >
            <ProjectListTitle />
            {
                mockProjects.map( (mockProject, i) => 
                    <ProjectCard 
                        key={i}
                        name={mockProject.name}
                        authorName={shortFullName(mockProject.author.firstName, mockProject.author.lastName)}
                        dateRange={projectDateRange(mockProject.startDate, mockProject.endDate)}
                    />
                )
            }
        </div>
    )
}

export default ProjectList