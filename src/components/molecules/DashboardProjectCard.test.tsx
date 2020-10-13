import React from 'react';
import { render } from '../../utils/testUtils'
import DashboardProjectCard from './DashboardProjectCard';

it('renders DashboardProjectCard', () => {
    const { getByTestId } = render(
        <DashboardProjectCard
            name='This is the project'
            author='Leonard Dicaprio'
            dateRange='10/12 2010 - 12/12 2012'
            accomplishmentStatement='Yessss! I finally won the Academy award!'
            completed={false}
            handleInputChange={() => {}}
            authed={true}
            projectId="gpoiajfphijaheph"
        />
    )

    expect(getByTestId('dashboard-project-card')).toBeTruthy()
})
