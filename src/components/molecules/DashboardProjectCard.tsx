import React from 'react'
import DashboardProjectCardTitle from '../atoms/Texts/DashboardProjectCardTitle';
import ProjectCardText from '../atoms/Texts/ProjectCardText';

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
            <ProjectCardText text={author} />
            <ProjectCardText text={dateRange} />
            <ProjectCardText text={accomplishmentStatement} />
        </div>
    )
}

export default DashboardProjectCard