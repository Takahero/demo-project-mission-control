import React from 'react';
import { render } from '../../utils/testUtils'
import SignInSection from './SignInSection';


it('renders SignInSection', () => {
    const { getByTestId } = render(<SignInSection/>)

    expect(getByTestId('sing-in-section')).toBeTruthy()
})
