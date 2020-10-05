import React from 'react';
import { render } from '../../../utils/testUtils'
import Label from './Label';

it('renders Label', () => {
    const { getByTestId } = render(
        <Label 
            label='This is the label' 
            value='Value'
        />
    )

    expect(getByTestId('label')).toBeTruthy()
})

it('renders label', () => {
    const { getByText } = render(
        <Label 
            label='This is the label' 
            value='Value'
        />
    )

    expect(getByText('This is the label')).toBeTruthy()
})
