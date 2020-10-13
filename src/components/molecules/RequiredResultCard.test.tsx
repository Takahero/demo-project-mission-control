import React from 'react';
import { render } from '../../utils/testUtils'
import RequiredResultCard from './RequiredResultCard';

it('renders RequiredResultCard', () => {
    const { getByTestId } = render(
        <RequiredResultCard
            requiredResultId="requiredResultId"
            projectId="projectId"
            name='This is the required result!'
            dateRange='10/12 2010 - 12/12 2012'
            toDos={[
                {
                    name: '30 days of 100 pushups',
                    completed: false,
                    id: "id",
                }
            ]}
            authed={true}
        />
    )

    expect(getByTestId('required-result-card')).toBeTruthy()
})

