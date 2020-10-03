import React from 'react'
import Title from '../atoms/Texts/Title';
import ProjectCard from '../molecules/ProjectCard'
import { mockProjects } from '../../utils/mockProjectsData'
import { shortFullName } from '../../utils/name';
import { projectDateRange } from '../../utils/date';
import {
    Link,
  } from 'react-router-dom';

const ProjectList: React.FC = () => {
    return (
        <div
            data-testid="project-list"
        >
            <Title title={"People's Projects"} />
            {
                mockProjects.map( (mockProject, i) => 
                    <Link 
                        to={mockProject.id}
                        key={i}
                    >
                        <ProjectCard 
                            name={mockProject.name}
                            authorName={shortFullName(mockProject.author.firstName, mockProject.author.lastName)}
                            dateRange={projectDateRange(mockProject.startDate, mockProject.endDate)}
                        />
                    </Link>
                )
            }
        </div>
    )
}

export default ProjectList