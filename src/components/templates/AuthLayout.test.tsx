import React from 'react';
import { render } from '../../utils/testUtils'
import AuthLayout from './AuthLayout'

it('renders Dashboard layout ', () => {
    const { getByTestId } = render(<AuthLayout/>)

    expect(getByTestId('auth-layout')).toBeTruthy()
})
