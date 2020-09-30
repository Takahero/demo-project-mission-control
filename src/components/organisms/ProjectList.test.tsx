import React from 'react';
import { render } from '@testing-library/react';
import ProjectList from './ProjectList';


it('renders ProjectList', () => {
    const { getByTestId } = render(<ProjectList/>)

    expect(getByTestId('project-list')).toBeTruthy()
})
