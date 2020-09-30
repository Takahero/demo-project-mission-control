import React from 'react';
import { render } from '@testing-library/react';
import NavMenu from './NavMenu';

it('renders NavMenu', () => {
    const { getByTestId } = render(<NavMenu/>)

    expect(getByTestId('nav-menu')).toBeTruthy()
})
