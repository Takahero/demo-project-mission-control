import React from 'react'
import RequiredResultCard from './RequiredResultCard';

const RequiredResultsSection: React.FC = () => {
    return (
        <div
            data-testid="required-results-section"
        >
            RequiredResultsSection
            <RequiredResultCard />
        </div>
    )
}

export default RequiredResultsSection