import React from 'react';
import { render } from './utils/testUtils';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

describe('Smoke test', () => {
    it('renders App', () => {
        const { getByTestId } = render(<App/>)

        expect(getByTestId('app')).toBeTruthy()
    })
})