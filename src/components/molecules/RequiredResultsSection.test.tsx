import React from 'react';
import { render } from '@testing-library/react';
import RequiredResultsSection from './RequiredResultsSection';
import { mockProjects } from '../../utils/mockProjectsData';

const { requiredResults } = mockProjects[0]
it('renders RequiredResultsSection', () => {
    const { getByTestId } = render(<RequiredResultsSection requiredResults={requiredResults} />)

    expect(getByTestId('required-results-section')).toBeTruthy()
})
