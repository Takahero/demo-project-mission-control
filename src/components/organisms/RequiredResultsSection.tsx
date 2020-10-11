import React, { useState } from 'react'
import RequiredResultCard from '../molecules/RequiredResultCard';
import Title from '../atoms/Texts/Title';
import { projectDateRange } from '../../utils/date';
import CreateRequiredResultButton from '../atoms/Buttons/CreateRequiredResultButton';
import RequiredResultForm from './RequiredResultForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { requiredResultsSelector } from '../../store/selector';

interface Props {
    projectId: string;
    authed: boolean;
}

const RequiredResultsSection: React.FC<Props | null> = ({
    projectId,
    authed
}) => {
    const [creatingRequiredResult, setCreatingRequiredResult] = useState(false)
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
                            name={requiredResult.name}
                            dateRange={projectDateRange(requiredResult.startDate, requiredResult.endDate)}
                            toDos={requiredResult.toDos}
                            key={i}
                        />
                    )
            }
            {
                authed ? (
                    creatingRequiredResult ?
                        <RequiredResultForm
                            projectId={projectId}
                            setCreatingRequiredResult={() => setCreatingRequiredResult(false)}
                        />
                    :
                        <CreateRequiredResultButton
                            handleClick={() => setCreatingRequiredResult(true)}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultsSection