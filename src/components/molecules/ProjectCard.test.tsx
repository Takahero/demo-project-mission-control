import React from 'react';
import { render } from '../../utils/testUtils'
import ProjectCard from './ProjectCard';

it('renders ProjectCard', () => {
    const { getByTestId } = render(
        <ProjectCard 
            name='This is the project'
            dateRange='Oct 1st 2020 - Dec 12th 2020'
            authorName='Leonard D.'
        />
    )

    expect(getByTestId('project-card')).toBeTruthy()
})
