import React from 'react'
import ProfileListTitle from '../atoms/Texts/ProfileListTitle'
import ProjectCard from '../molecules/ProjectCard'
import { mockProjects } from '../../utils/mockProjectsData'
import { shortFullName } from '../../utils/name';



const ProjectList: React.FC = () => {
    const { author } = mockProjects[0]
    return (
        <div
            data-testid="project-list"
        >
            <ProfileListTitle />
            <ProjectCard 
                name={mockProjects[0].name}
                authorName={shortFullName(author.firstName, author.lastName )}
            />
        </div>
    )
}

export default ProjectList