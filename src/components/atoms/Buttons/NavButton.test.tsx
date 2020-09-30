import React from 'react';
import { render } from '@testing-library/react';
import NavButton from './NavButton';

it('renders NavButton', () => {
    const { getByTestId } = render(<NavButton/>)

    expect(getByTestId('nav-button')).toBeTruthy()
})
