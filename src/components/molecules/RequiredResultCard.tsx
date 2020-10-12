import React, { useState } from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import DateRange from '../atoms/Texts/DateRange';
import RequiredResultButton from '../atoms/Buttons/RequiredResultButton';
import RequiredResultForm from '../organisms/RequiredResultForm';

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
}

const RequiredResultCard: React.FC<Props> = ({
    requiredResultId,
    projectId,
    name,
    dateRange,
    toDos,
    authed
}) => {
    const [showingForm, setShowingForm] = useState(false)
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
                        <RequiredResultButton
                            text="Update Required Result"
                            setShowingForm={() => setShowingForm(true)}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultCard

