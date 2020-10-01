import { projectDateRange } from './date';

const mockProjectDates = {
    startDate: new Date(2020, 9, 1),
    endDate: new Date(2020, 11, 12),
}

it('creates project date range string', () => {

    expect(projectDateRange(mockProjectDates.startDate, mockProjectDates.endDate)).toBe('Oct 1st 2020 - Dec 12th 2020')
})