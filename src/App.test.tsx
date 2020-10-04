import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

describe('Smoke test', () => {
    it('renders App', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App/>
            </Provider>
        )

        expect(getByTestId('app')).toBeTruthy()
    })
})
