import React from 'react';
import { render } from '../../utils/testUtils'
import ToDoInput from './ToDoListItem';

it('renders ToDoInput', () => {
    const { getByTestId } = render(
        <ToDoInput
            toDo={{
                id: "id",
                name: "name",
                completed: false,
            }}
            completeToDo={() => {}}
            updateToDo={() => {}}
        />
    )

    expect(getByTestId('to-do-list-item')).toBeTruthy()
})
