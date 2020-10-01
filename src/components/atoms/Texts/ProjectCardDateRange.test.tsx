import React from 'react';
import { render } from '@testing-library/react';
import ProjectCardDateRange from './ProjectCardDateRange';
import { mockProjectDates } from '../../../utils/mockProjectsData'
import { projectDateRange } from '../../../utils/date';

it('renders ProjectCardDateRange', () => {
    const { getByTestId } = render(<ProjectCardDateRange dateRange={projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)} />)

    expect(getByTestId('project-card-date-range')).toBeTruthy()
})

it('renders text', () => {
    const { getByText } = render(<ProjectCardDateRange dateRange={projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)} />)

    expect(getByText('Oct 1st 2020 - Dec 12th 2020')).toBeTruthy()
})
