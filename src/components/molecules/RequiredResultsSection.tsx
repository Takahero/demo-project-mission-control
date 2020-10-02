import React from 'react'
import RequiredResultCard from './RequiredResultCard';
import Title from '../atoms/Texts/Title';
import { mockProjects } from '../../utils/mockProjectsData';
import { projectDateRange } from '../../utils/date';

const RequiredResultsSection: React.FC = () => {
    const { requiredResults } = mockProjects[0]
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