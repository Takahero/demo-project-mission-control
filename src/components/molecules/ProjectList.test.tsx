import React from 'react';
import { render } from '../../utils/testUtils'
import ProjectList from './ProjectList';

it('renders ProjectList', () => {
    const { getByTestId } = render(
        <ProjectList
            projects={[]}
            listTitle="This is listTitle"
        />
    )

    expect(getByTestId('project-list')).toBeTruthy()
})
