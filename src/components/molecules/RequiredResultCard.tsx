import React, { useState } from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import DateRange from '../atoms/Texts/DateRange';
import RequiredResultForm from '../organisms/RequiredResultForm';
import Button from '../atoms/Buttons/Button';

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
                        <Button
                            text="Update Required Result"
                            handleClick={() => setShowingForm(true)}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultCard

