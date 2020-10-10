import React from 'react';
import { render } from '../../utils/testUtils'
import ProjectListSection from './ProjectListSection';

it('renders ProjectListSection', () => {
    const { getByTestId } = render(<ProjectListSection/>)

    expect(getByTestId('project-list-section')).toBeTruthy()
})
