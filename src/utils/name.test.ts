import { 
    shortFullName,
    fullName
 } from './name';

it('creates short full name', () => {
    expect(shortFullName('Leonardo', 'Dicaprio')).toBe('Leonardo D.')
})

it('creates full name', () => {
    expect(fullName('Leonardo', 'Dicaprio')).toBe('Leonardo Dicaprio')
})


