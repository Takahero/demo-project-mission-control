import React from 'react'
import ProfileListTitle from '../atoms/Texts/ProfileListTitle'
import ProjectCard from '../molecules/ProjectCard'
import { mockProjects } from '../../utils/mockProjectsData'



const ProjectList: React.FC = () => {
    return (
        <div
            data-testid="project-list"
        >
            <ProfileListTitle />
            <ProjectCard 
                name={mockProjects[0].name}
                startDate={mockProjects[0].startDate}
                endDate={mockProjects[0].endDate}
                author={mockProjects[0].author}
            />
        </div>
    )
}

export default ProjectList