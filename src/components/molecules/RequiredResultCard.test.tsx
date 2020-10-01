import React from 'react';
import { render } from '@testing-library/react';
import RequiredResultCard from './RequiredResultCard';

it('renders RequiredResultCard', () => {
    const { getByTestId } = render(<RequiredResultCard/>)

    expect(getByTestId('required-result-card')).toBeTruthy()
})
