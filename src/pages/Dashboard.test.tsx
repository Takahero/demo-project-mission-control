import React from 'react';
import { render } from '../utils/testUtils';
import Dashboard from './Dashboard';


it.only('renders Main page', () => {
    let { queryByTestId } = render(<Dashboard />)
    expect(queryByTestId('dashboard-page')).toBeTruthy()
})
