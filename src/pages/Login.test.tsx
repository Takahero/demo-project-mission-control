import React from 'react';
import { render } from '../utils/testUtils';
import Login from './Login';


it.only('renders Main page', () => {
    let { queryByTestId } = render(<Login />)
    expect(queryByTestId('login-page')).toBeTruthy()
})
