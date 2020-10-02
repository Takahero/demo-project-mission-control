import React from 'react'
import RequiredResultCard from './RequiredResultCard';
import Title from '../atoms/Texts/Title';

const RequiredResultsSection: React.FC = () => {
    return (
        <div
            data-testid="required-results-section"
        >
            <Title title={"Required Results"} />
            <RequiredResultCard />
        </div>
    )
}

export default RequiredResultsSection