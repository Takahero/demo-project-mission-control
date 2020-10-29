import { projectDateRange } from './date';

it('creates project date range string', () => {

    expect(projectDateRange(new Date(2020, 9, 1), new Date(2020, 11, 12))).toBe('Oct 1st 2020 - Dec 12th 2020')
})