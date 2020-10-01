import React from 'react';
import { render } from '@testing-library/react';
import DashboardProjectCardTitle from './DashboardProjectCardTitle';

it('renders DashboardProjectCardTitle', () => {
    const { getByTestId } = render(<DashboardProjectCardTitle title='This is the title' />)

    expect(getByTestId('dashboard-project-card-title')).toBeTruthy()
})

it('renders title', () => {
    const { getByText } = render(<DashboardProjectCardTitle title='This is the title' />)

    expect(getByText('This is the title')).toBeTruthy()
})
