import React from 'react';
import { render } from '@testing-library/react';
import ProfileListTitle from './ProfileListTitle';

it('renders ProfileListTitle', () => {
    const { getByTestId } = render(<ProfileListTitle/>)

    expect(getByTestId('profile-list-title')).toBeTruthy()
})
