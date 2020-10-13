import React from 'react';
import { render } from '../../utils/testUtils'
import ToDoForm from './ToDoForm';

it('renders ToDoForm', () => {
    const { getByTestId } = render(
        <ToDoForm
            projectId="projectId"
            requiredResultId="requiredResultId"
            setShowInput={() => {}}
        />
    )

    expect(getByTestId('to-do-form')).toBeTruthy()
})
