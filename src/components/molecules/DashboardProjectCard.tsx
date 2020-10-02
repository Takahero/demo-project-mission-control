import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';

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
            <Title title={name} />
            <Text text={author} />
            <Text text={dateRange} />
            <Text text={accomplishmentStatement} />
        </div>
    )
}

export default DashboardProjectCard