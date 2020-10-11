import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import CompleteCheckbox from './CompleteCheckbox';
import NavButton from '../atoms/Buttons/NavButton';
import DeleteProjectButton from '../atoms/Buttons/DeleteProjectButton';

interface Props {
    name: string;
    author: string;
    dateRange: string;
    accomplishmentStatement: string;
    completed: boolean;
    handleInputChange: any;
    authed: boolean;
    projectId: string;
}

const DashboardProjectCard: React.FC<Props> = ({
    name,
    author,
    dateRange,
    accomplishmentStatement,
    completed,
    handleInputChange,
    authed,
    projectId
}) => {
    return (
        <div
            data-testid="dashboard-project-card"
        >
            <Title title={name} />
            <Text text={author} />
            <Text text={dateRange} />
            <Text text={accomplishmentStatement} />
            { authed &&
                <>
                    <CompleteCheckbox
                        label="Complete"
                        value="completed"
                        checked={completed}
                        handleInputChange={handleInputChange}
                    />
                    <NavButton
                        text="Edit Project"
                        path={`/project/${projectId}/edit`}
                    />
                    <DeleteProjectButton projectId={projectId} />
                </>
            }


        </div>
    )
}

export default DashboardProjectCard