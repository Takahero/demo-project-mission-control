import React from 'react';
import { render } from '../../utils/testUtils'
import NavMenu from './NavMenu';

it('renders NavMenu', () => {
    const { getByTestId } = render(<NavMenu/>)

    expect(getByTestId('nav-menu')).toBeTruthy()
})
