import React from 'react';
import { render } from '../../utils/testUtils'
import ToDoCheckList from './ToDoCheckList';

it('renders ToDoCheckList', () => {
    const { getByTestId } = render(
        <ToDoCheckList
            requiredResultId="requiredResultId"
            projectId="projectId"
            toDos={[
                {
                    id: "id",
                    name: '30 days of 100 pushups',
                    completed: false
                }
            ]}
            authed={true}
        />
    )

    expect(getByTestId('to-do-checklist')).toBeTruthy()
})

