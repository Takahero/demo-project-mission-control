import React from 'react';
import { render } from '@testing-library/react';
import DashboardProjectCard from './DashboardProjectCard';

it('renders DashboardProjectCard', () => {
    const { getByTestId } = render(<DashboardProjectCard/>)

    expect(getByTestId('dashboard-project-card')).toBeTruthy()
})
