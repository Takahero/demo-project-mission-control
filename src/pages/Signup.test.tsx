import React from 'react';
import { render } from '../utils/testUtils';
import Signup from './Signup';


it.only('renders Main page', () => {
    let { queryByTestId } = render(<Signup />)
    expect(queryByTestId('signup-page')).toBeTruthy()
})
