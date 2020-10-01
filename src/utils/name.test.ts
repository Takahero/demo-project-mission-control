import { shortFullName } from './name';

it('creates short full name', () => {
    expect(shortFullName('Leonardo', 'Dicaprio')).toBe('Leonardo D.')
})

