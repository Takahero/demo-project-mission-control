import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

it('renders Logo', () => {
    const { getByTestId } = render(<Logo/>)

    expect(getByTestId('logo')).toBeTruthy()
})
