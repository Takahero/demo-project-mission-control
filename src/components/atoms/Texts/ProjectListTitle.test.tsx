import React from 'react';
import { render } from '@testing-library/react';
import ProjectListTitle from './ProjectListTitle';

it('renders ProjectListTitle', () => {
    const { getByTestId } = render(<ProjectListTitle/>)

    expect(getByTestId('project-list-title')).toBeTruthy()
})
