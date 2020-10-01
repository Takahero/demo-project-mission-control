
import React from 'react'

interface Props {
    dateRange: string
}
const ProjectCardDateRange: React.FC<Props> = ({
    dateRange
}) => {
    return (
        <div
            data-testid="project-card-date-range"
        >
            {dateRange}
        </div>
    )
}

export default ProjectCardDateRange