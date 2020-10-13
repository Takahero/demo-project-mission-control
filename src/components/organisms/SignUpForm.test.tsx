import React from 'react';
import { render } from '../../utils/testUtils'
import SignUpForm from './SignUpForm';

it('renders SignUpForm', () => {
    const { getByTestId } = render(<SignUpForm/>)

    expect(getByTestId('sign-up-form')).toBeTruthy()
})
