import React from 'react';
import { render } from '@testing-library/react';
import RequiredResultsSection from './RequiredResultsSection';

it('renders RequiredResultsSection', () => {
    const { getByTestId } = render(<RequiredResultsSection/>)

    expect(getByTestId('required-results-section')).toBeTruthy()
})
