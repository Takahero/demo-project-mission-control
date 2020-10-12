import React, { useState } from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import DateRange from '../atoms/Texts/DateRange';
import RequiredResultForm from '../organisms/RequiredResultForm';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import CompleteCheckbox from './CompleteCheckbox';

interface Props {
    requiredResultId: string;
    projectId: string;
    name: string;
    dateRange: string;
    toDos: Array<{
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

    const deleteRequiredResult = () => {
        firestore.delete({
			collection: 'projects',
			doc: projectId,
			subcollections: [{
				collection: 'requiredResults',
				doc: requiredResultId
			}],
			storeAs: 'requiredResults'
		}).catch(e => console.error(e))
    }

    const completeRequiredResult = () => {
        firestore.update({
			collection: 'projects',
			doc: projectId,
			subcollections: [{
				collection: 'requiredResults',
				doc: requiredResultId
			}],
			storeAs: 'requiredResults'
		}, {
            completed: !completed
        }).catch(e => console.error(e))
    }

    return (
        <div
            data-testid="required-result-card"
        >
            <Title title={name} />
            <DateRange dateRange={dateRange} />
            {
                toDos && toDos.map((toDo, i) =>
                    <Text
                        text={toDo.name}
                        key={i}
                    />
                )
            }
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
                            <CompleteCheckbox
                                label="Complete"
                                value="completed"
                                checked={completed}
                                handleInputChange={() => completeRequiredResult()}
                            />
                            <Button
                                text="Update Required Result"
                                handleClick={() => setShowingForm(true)}
                            />
                            <Button
                                text="Delete"
                                handleClick={() => deleteRequiredResult()}
                            />
                        </>
                ) : null
            }
        </div>
    )
}

export default RequiredResultCard

