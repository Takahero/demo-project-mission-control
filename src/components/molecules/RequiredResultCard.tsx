import React, { useState } from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import DateRange from '../atoms/Texts/DateRange';
import RequiredResultForm from '../organisms/RequiredResultForm';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import CompleteCheckbox from './CompleteCheckbox';
import { completeRequiredResult, deleteRequiredResult } from '../../utils/requiredResultsFirestore';
import ToDoCheckList from './ToDoCheckList';

interface Props {
    requiredResultId: string;
    projectId: string;
    name: string;
    dateRange: string;
    toDos: Array<{
        id: string;
        name: string;
        completed: boolean;
    }>;
    authed: boolean;
    completed: boolean;
}

const RequiredResultCard: React.FC<Props> = ({
    requiredResultId,
    projectId,
    name,
    dateRange,
    toDos,
    authed,
    completed
}) => {
    const [showingForm, setShowingForm] = useState(false)
    const firestore = useFirestore()

    return (
        <div
            data-testid="required-result-card"
        >
            {
                authed ? (
                    showingForm ?
                        <RequiredResultForm
                            requiredResultId={requiredResultId}
                            projectId={projectId}
                            setShowingForm={() => setShowingForm(false)}
                        />
                    :
                        <>
                            <Title title={name} />
                            <DateRange dateRange={dateRange} />
                            <CompleteCheckbox
                                label="Complete"
                                value="completed"
                                checked={completed}
                                handleInputChange={() => completeRequiredResult(firestore, projectId, requiredResultId, completed)}
                            />
                            <Button
                                text="Update Required Result"
                                handleClick={() => setShowingForm(true)}
                            />
                            <Button
                                text="Delete"
                                handleClick={() => deleteRequiredResult(firestore, projectId, requiredResultId)}
                            />
                        </>
                ) : null
            }
            <ToDoCheckList
                requiredResultId={requiredResultId}
                projectId={projectId}
                toDos={toDos}
                authed={authed}
            />
        </div>
    )
}

export default RequiredResultCard

