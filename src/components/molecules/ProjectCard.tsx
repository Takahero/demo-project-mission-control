import React from 'react'
import ProjectCardText from '../atoms/Texts/ProjectCardText'
import ProjectCardTitle from '../atoms/Texts/ProjectCardTitle'

interface Props {
    name: string;
    dateRange: string;
    authorName: string;
}

const ProjectCard: React.FC<Props> = ({
    name,
    authorName
}) => {
    return (
        <div
            data-testid="project-card"
        >
            <ProjectCardTitle title={name} />
            <ProjectCardText text={authorName} />
        </div>
    )
}

export default ProjectCard