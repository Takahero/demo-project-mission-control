import React from 'react';
import { render } from '../../../utils/testUtils'
import GoogleAuthButton from './GoogleAuthButton';

it('renders GoogleAuthButton', () => {
    const { getByTestId } = render(
        <GoogleAuthButton
            firebase="firebase"
        />
    )

    expect(getByTestId('button')).toBeTruthy()
})
