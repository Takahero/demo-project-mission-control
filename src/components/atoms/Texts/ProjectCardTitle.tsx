
import React from 'react'

interface Props {
    title: string
}
const ProjectCardTitle: React.FC<Props> = ({
    title
}) => {
    return (
        <div
            data-testid="project-card-title"
        >
            {title}
        </div>
    )
}

export default ProjectCardTitle