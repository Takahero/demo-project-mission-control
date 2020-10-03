import React from 'react'
import RequiredResultCard from './RequiredResultCard';
import Title from '../atoms/Texts/Title';
import { projectDateRange } from '../../utils/date';

interface Props {
    requiredResults: Array<{
        name: string;
        startDate: Date;
        endDate: Date;
        toDos: Array<{
            name: string;
            completed: boolean;
        }>;
    }>;
}

const RequiredResultsSection: React.FC<Props> = ({
    requiredResults
}) => {
    return (
        <div
            data-testid="required-results-section"
        >
            <Title title={"Required Results"} />
            {
                requiredResults.map((requiredResult, i) => 
                    <RequiredResultCard
                        name={requiredResult.name}
                        dateRange={projectDateRange(requiredResult.startDate, requiredResult.endDate)}
                        toDos={requiredResult.toDos}
                        key={i}
                    />
                )
            }
        </div>
    )
}

export default RequiredResultsSection