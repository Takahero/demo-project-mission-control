import React from 'react'
import ProfileListTitle from '../atoms/Texts/ProfileListTitle'
import ProjectCard from '../molcules/ProjectCard'

const ProjectList: React.FC = () => {
    return (
        <div
            data-testid="project-list"
        >
            <ProfileListTitle />
            <ProjectCard />
        </div>
    )
}

export default ProjectList