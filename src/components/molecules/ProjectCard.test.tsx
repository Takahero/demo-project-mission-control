import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';

it('renders ProjectCard', () => {
    const { getByTestId } = render(<ProjectCard/>)

    expect(getByTestId('project-card')).toBeTruthy()
})
