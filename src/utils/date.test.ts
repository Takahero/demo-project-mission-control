import { projectDateRange } from './date';
import { mockProjectDates } from './mockProjectsData'

it('creates project date range string', () => {

    expect(projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)).toBe('Oct 1st 2020 - Dec 12th 2020')
})