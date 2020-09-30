import React from 'react';
import { render } from '@testing-library/react';
import ProfileCardText from './ProfileCardText';

it('renders ProfileCardText', () => {
    const { getByTestId } = render(<ProfileCardText/>)

    expect(getByTestId('profile-card-text')).toBeTruthy()
})
