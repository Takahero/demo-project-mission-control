import React from 'react';
import { render } from '../../utils/testUtils'
import ProjectList from './ProjectList';
import { MemoryRouter } from 'react-router-dom'


it('renders ProjectList', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <ProjectList/>
        </MemoryRouter>
    )

    expect(getByTestId('project-list')).toBeTruthy()
})
