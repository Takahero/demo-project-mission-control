import React from 'react';
import { render } from '../../utils/testUtils'
import DashboardProjectCard from './DashboardProjectCard';

it('renders DashboardProjectCard', () => {
    const { getByTestId } = render(
        <DashboardProjectCard
            handleInputChange={() => {}}
            authed={true}
        />
    )

    expect(getByTestId('dashboard-project-card')).toBeTruthy()
})
