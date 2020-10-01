import React from 'react'
import ProjectCardDateRange from '../atoms/Texts/ProjectCardDateRange'
import ProjectCardText from '../atoms/Texts/ProjectCardText'
import ProjectCardTitle from '../atoms/Texts/ProjectCardTitle'

interface Props {
    name: string;
    dateRange: string;
    authorName: string;
}

const ProjectCard: React.FC<Props> = ({
    name,
    dateRange,
    authorName
}) => {
    return (
        <div
            data-testid="project-card"
        >
            <ProjectCardDateRange dateRange={dateRange} />
            <ProjectCardTitle title={name} />
            <ProjectCardText text={authorName} />
        </div>
    )
}

export default ProjectCard