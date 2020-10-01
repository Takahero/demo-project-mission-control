
import React from 'react'

interface Props {
    title: string
}
const DashboardProjectCardTitle: React.FC<Props> = ({
    title
}) => {
    return (
        <div
            data-testid="dashboard-project-card-title"
        >
            {title}
        </div>
    )
}

export default DashboardProjectCardTitle