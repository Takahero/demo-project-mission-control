import React from 'react'
import DashboardProjectCardTitle from '../atoms/Texts/DashboardProjectCardTitle';

interface Props {
    name: string;
    author: string;
    dateRange: string;
    accomplishmentStatement: string;
}

const DashboardProjectCard: React.FC<Props> = ({
    name,
    author,
    dateRange,
    accomplishmentStatement
}) => {
    return (
        <div
            data-testid="dashboard-project-card"
        >
            <DashboardProjectCardTitle title={name} />
            
        </div>
    )
}

export default DashboardProjectCard