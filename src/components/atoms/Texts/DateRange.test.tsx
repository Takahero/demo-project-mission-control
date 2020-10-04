import React from 'react';
import { render } from '../../../utils/testUtils'
import DateRange from './DateRange';
import { mockProjectDates } from '../../../utils/mockProjectsData'
import { projectDateRange } from '../../../utils/date';

it('renders DateRange', () => {
    const { getByTestId } = render(<DateRange dateRange={projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)} />)

    expect(getByTestId('date-range')).toBeTruthy()
})

it('renders text', () => {
    const { getByText } = render(<DateRange dateRange={projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)} />)

    expect(getByText('Oct 1st 2020 - Dec 12th 2020')).toBeTruthy()
})
