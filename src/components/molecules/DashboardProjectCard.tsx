import React from 'react'

interface Props {
    name: string;
    author: string;
    dateRange: string;
    accomplishmentStatement: string;
}

const DashboardProjectCard: React.FC<Props> = () => {
    return (
        <div
            data-testid="dashboard-project-card"
        >
            DashboardProjectCard
        </div>
    )
}

export default DashboardProjectCard