import React from 'react';
import { render } from '../../../utils/testUtils'
import SubmitButton from './SubmitButton';

it('renders SubmitButton', () => {
    const { getByTestId } = render(
        <SubmitButton
            text="this is text"
        />
    )

    expect(getByTestId('submit-button')).toBeTruthy()
})