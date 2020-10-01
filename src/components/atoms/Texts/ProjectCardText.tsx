
import React from 'react'

interface Props {
    text: string
}

const ProjectCardText: React.FC<Props> = ({
    text
}) => {
    return (
        <div
            data-testid="project-card-text"
        >
            {text}
        </div>
    )
}

export default ProjectCardText