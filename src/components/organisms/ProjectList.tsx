import React from 'react'
import ProjectCard from '../molcules/ProjectCard'

const ProjectList: React.FC = () => {
    return (
        <div
            data-testid="project-list"
        >
            <ProjectCard />
        </div>
    )
}

export default ProjectList