import React, { useState } from 'react'
import RequiredResultCard from '../molecules/RequiredResultCard';
import Title from '../atoms/Texts/Title';
import { projectDateRange } from '../../utils/date';
import RequiredResultForm from './RequiredResultForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { requiredResultsSelector } from '../../store/selector';
import Button from '../atoms/Buttons/Button';
import { sortToDosByDate } from '../../utils/toDosFirestore';

interface Props {
    projectId: string;
    authed: boolean;
}

const RequiredResultsSection: React.FC<Props | null> = ({
    projectId,
    authed
}) => {
    const [showingForm, setShowingForm] = useState(false)
    const requiredResults = useSelector((state: RootState) => requiredResultsSelector(state, projectId))
    return (
        <div
            data-testid="required-results-section"
        >
            <Title title="Required Results" />
            {
                requiredResults && requiredResults.length > 0 &&
                    requiredResults.map((requiredResult: any, i: string) =>
                        <RequiredResultCard
                            requiredResultId={requiredResult.id}
                            projectId={projectId}
                            name={requiredResult.name}
                            dateRange={projectDateRange(requiredResult.startDate, requiredResult.endDate)}
                            toDos={sortToDosByDate(requiredResult.toDos)}
                            key={i}
                            authed={authed}
                            completed={requiredResult.completed}
                        />
                    )
            }
            {
                authed ? (
                    showingForm ?
                        <RequiredResultForm
                            projectId={projectId}
                            setShowingForm={() => setShowingForm(false)}
                        />
                    :
                        <Button
                            text="Create Required Result"
                            handleClick={() => setShowingForm(true)}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultsSection