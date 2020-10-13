import React from 'react';
import { render } from '../../utils/testUtils'
import ToDoInput from './ToDoListItem';

it('renders ToDoInput', () => {
    const { getByTestId } = render(
        <ToDoInput
            projectId="projectId"
            requiredResultId="requiredResultId"
            authed={true}
            toDo={{
                id: "id",
                name: "name",
                completed: false,
            }}
        />
    )

    expect(getByTestId('to-do-list-item')).toBeTruthy()
})
