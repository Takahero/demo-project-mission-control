import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import CompleteCheckbox from './CompleteCheckbox';

interface Props {
    name: string;
    author: string;
    dateRange: string;
    accomplishmentStatement: string;
    completed: boolean;
    handleInputChange: any;
    authed: boolean;
}

const DashboardProjectCard: React.FC<Props> = ({
    name,
    author,
    dateRange,
    accomplishmentStatement,
    completed,
    handleInputChange,
    authed
}) => {
    return (
        <div
            data-testid="dashboard-project-card"
        >
            <Title title={name} />
            <Text text={author} />
            <Text text={dateRange} />
            <Text text={accomplishmentStatement} />
            {
                authed && 
                    <CompleteCheckbox
                        label="Complete"
                        value="completed"
                        checked={completed}
                        handleInputChange={handleInputChange}
                    />
            }

        </div>
    )
}

export default DashboardProjectCard