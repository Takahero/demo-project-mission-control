import React from 'react';
import { render } from '../../../utils/testUtils'
import RequiredResultButton from './RequiredResultButton';

it('renders RequiredResultButton', () => {
    const { getByTestId } = render(
        <RequiredResultButton
            text="This is text"
            setShowingForm={() => {}}
        />
    )

    expect(getByTestId('required-result-button')).toBeTruthy()
})
