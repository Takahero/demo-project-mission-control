import React from 'react';
import { render } from '../../utils/testUtils'
import RequiredResultsSection from './RequiredResultsSection';
import { mockProjects } from '../../utils/mockProjectsData';

const { requiredResults } = mockProjects[0]
it('renders RequiredResultsSection', () => {
    const { getByTestId } = render(
        <RequiredResultsSection
            requiredResults={requiredResults}
            projectId="projectId"
            authed={true}
        />
    )

    expect(getByTestId('required-results-section')).toBeTruthy()
})
