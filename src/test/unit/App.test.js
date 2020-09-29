import React from 'react';
import { render } from '@testing-library/react';
import App from '../.././App';

describe('Smoke test', () => {
    it('renders App', () => {
        const { getByTestId } = render(<App/>)

        expect(getByTestId('App')).toBeTruthy()
    })
})
