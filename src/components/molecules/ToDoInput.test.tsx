import React from 'react';
import { render } from '../../utils/testUtils'
import ToDoInput from './ToDoInput';

it('renders ToDoInput', () => {
    const { getByTestId } = render(
        <ToDoInput
            value="toDoInput"
            checked={true}
            handleInputChange={() => {}}
        />
    )

    expect(getByTestId('to-do-input')).toBeTruthy()
})
