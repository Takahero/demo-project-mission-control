import React from 'react';
import { render } from '@testing-library/react';
import ProjectCardText from './ProjectCardText';

it('renders ProjectCardText', () => {
    const { getByTestId } = render(<ProjectCardText text='This is the text' />)

    expect(getByTestId('project-card-text')).toBeTruthy()
})

it('renders text', () => {
    const { getByText } = render(<ProjectCardText text='This is the text' />)

    expect(getByText('This is the text')).toBeTruthy()
})
