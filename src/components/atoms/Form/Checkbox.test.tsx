import React from 'react';
import { render } from '../../../utils/testUtils'
import Checkbox from './Checkbox';

it('renders Checkbox', () => {
    const { getByTestId } = render(
        <Checkbox
            name="checkbox"
            checked={false}
            handleInputChange={() => {}}
        />
    )

    expect(getByTestId('checkbox')).toBeTruthy()
})