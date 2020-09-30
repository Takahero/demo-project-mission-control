import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';


it.only('renders Main page', () => {
    let { queryByTestId } = render(<Main />)
    expect(queryByTestId('main-page')).toBeTruthy()
})