import React from 'react';
import { render } from '../../../utils/testUtils'
import NavButton from './NavButton';

it('renders NavButton', () => {
    const { getByTestId } = render(<NavButton/>)

    expect(getByTestId('nav-button')).toBeTruthy()
})
