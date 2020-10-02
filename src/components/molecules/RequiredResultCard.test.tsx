import React from 'react';
import { render } from '@testing-library/react';
import RequiredResultCard from './RequiredResultCard';

it('renders RequiredResultCard', () => {
    const { getByTestId } = render(<RequiredResultCard
        name={'This is the required result!'}
        dateRange={'10/12 2010 - 12/12 2012'}
        toDos={[
            {
                name: '30 days of 100 pushups',
                completed: false
            }
        ]}
    />)

    expect(getByTestId('required-result-card')).toBeTruthy()
})

