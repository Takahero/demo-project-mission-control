import React from 'react';
import { render } from '../../utils/testUtils'
import DashboardProjectCard from './DashboardProjectCard';

it('renders DashboardProjectCard', () => {
    const { getByTestId } = render(
        <DashboardProjectCard
            project={{
                id:"gpoiajfphijaheph",
                projectName:"This is the project",
                author: {
                    uid: "uid",
                    firstName: "Leonard",
                    lastName: "Dicaprio",
                },
                startDate: "10/12/2010",
                endDate: "12/12 2012",
                accomplishmentStatement:"Yessss! I finally won the Academy award!",
                completed:false,
                createdAt: new Date()
            }}
            handleInputChange={() => {}}
            authed={true}
        />
    )

    expect(getByTestId('dashboard-project-card')).toBeTruthy()
})
