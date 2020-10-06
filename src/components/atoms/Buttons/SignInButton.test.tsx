import React from 'react';
import { render } from '../../../utils/testUtils'
import SignInButton from './SignInButton';

it('renders SignInButton', () => {
    const { getByTestId } = render(<SignInButton />)

    expect(getByTestId('sign-in-button')).toBeTruthy()
})
