import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import CompleteCheckbox from './CompleteCheckbox';
import NavButton from '../atoms/Buttons/NavButton';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import { pushHistoryTo } from '../../utils/history';

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
    const firestore = useFirestore()
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
                    <Button
                        text="Delete"
                        handleClick={() => {
                            // Due to firestore feature, although collection gets deleted, subcollections won't be deleted
                            firestore.delete({ collection: "projects", doc: projectId })
                            pushHistoryTo("/")
                        }}
                    />
                </>
            }


        </div>
    )
}

export default DashboardProjectCard