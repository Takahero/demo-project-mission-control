import React from 'react';
import { render } from '@testing-library/react';
import ProfileCardTitle from './ProfileCardTitle';

it('renders ProfileCardTitle', () => {
    const { getByTestId } = render(<ProfileCardTitle title='This is the title' />)

    expect(getByTestId('profile-card-title')).toBeTruthy()
})

it('renders title', () => {
    const { getByText } = render(<ProfileCardTitle title='This is the title' />)

    expect(getByText('This is the title')).toBeTruthy()
})
