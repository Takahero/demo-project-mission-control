import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';


it('renders Main page', () => {
    const { getByTestId } = render(<Main/>)

    expect(getByTestId('main-page')).toBeTruthy()
})
