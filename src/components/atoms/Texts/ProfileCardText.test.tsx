import React from 'react';
import { render } from '@testing-library/react';
import ProfileCardText from './ProfileCardText';

it('renders ProfileCardText', () => {
    const { getByTestId } = render(<ProfileCardText text='This is the text' />)

    expect(getByTestId('profile-card-text')).toBeTruthy()
})

it('renders text', () => {
    const { getByText } = render(<ProfileCardText text='This is the text' />)

    expect(getByText('This is the text')).toBeTruthy()
})
