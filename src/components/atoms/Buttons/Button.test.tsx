import React from 'react';
import { render } from '../../../utils/testUtils'
import Button from './Button';

it('renders Button', () => {
    const { getByTestId } = render(
        <Button 
            text="This is text" 
            handleClick={() => {}}
        /> 
    )

    expect(getByTestId('button')).toBeTruthy()
})
