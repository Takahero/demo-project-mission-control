import React from 'react';
import { render } from '../../utils/testUtils'
import ProjectDashboard from './ProjectDashboard';

it('renders ProjectDashboard', () => {
    const { getByTestId } = render(<ProjectDashboard projectId={'dfpoigjerpoig'} />)

    expect(getByTestId('project-dashboard')).toBeTruthy()
})
