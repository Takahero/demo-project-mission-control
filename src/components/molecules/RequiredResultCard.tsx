import React, { useState } from 'react'
import Title from '../atoms/Texts/Title';
import DateRange from '../atoms/Texts/DateRange';
import RequiredResultForm from '../organisms/RequiredResultForm';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import CompleteCheckbox from './CompleteCheckbox';
import {
    completeRequiredResult,
    deleteRequiredResult
} from '../../utils/requiredResultsFirestore';
import ToDoCheckList from './ToDoCheckList';
import { RequiredResultType } from '../../utils/firestoreDocumentTypes';
import { projectDateRange } from '../../utils/date';
import { sortToDosByDate } from '../../utils/toDosFirestore';

interface Props {
    requiredResultId: string;
    projectId: string;
    authed: boolean;
    requiredResult: RequiredResultType;
}

const RequiredResultCard: React.FC<Props> = ({
    requiredResultId,
    projectId,
    authed,
    requiredResult,
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
                            requiredResultId={requiredResult.id}
                            projectId={projectId}
                            authed={authed}
                            setShowingForm={() => setShowingForm(false)}
                        />
                    :
                        <>
                            <Title title={requiredResult.name} />
                            <DateRange dateRange={projectDateRange(requiredResult.startDate, requiredResult.endDate)} />
                            <CompleteCheckbox
                                label="Complete"
                                value="completed"
                                checked={requiredResult.completed}
                                handleInputChange={() => completeRequiredResult(firestore, projectId, requiredResult.id, requiredResult.completed)}
                            />
                            <Button
                                text="Update Required Result"
                                handleClick={() => setShowingForm(true)}
                            />
                            <Button
                                text="Delete"
                                handleClick={() => deleteRequiredResult(firestore, projectId, requiredResult.id)}
                            />
                        </>
                ) : null
            }
            <ToDoCheckList
                requiredResultId={requiredResultId}
                projectId={projectId}
                toDos={sortToDosByDate(requiredResult.toDos)}
                authed={authed}
            />
        </div>
    )
}

export default RequiredResultCard

