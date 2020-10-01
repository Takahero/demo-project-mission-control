import React from 'react';
import { render } from '@testing-library/react';
import ProjectCardTitle from './ProjectCardTitle';

it('renders ProjectCardTitle', () => {
    const { getByTestId } = render(<ProjectCardTitle title='This is the title' />)

    expect(getByTestId('project-card-title')).toBeTruthy()
})

it('renders title', () => {
    const { getByText } = render(<ProjectCardTitle title='This is the title' />)

    expect(getByText('This is the title')).toBeTruthy()
})
