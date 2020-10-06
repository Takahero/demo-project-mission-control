import React from 'react';
import { render } from '../../../utils/testUtils'
import SignOutButton from './SignOutButton';

it('renders SignOutButton', () => {
    const { getByTestId } = render(<SignOutButton  /> )

    expect(getByTestId('sign-out-button')).toBeTruthy()
})
