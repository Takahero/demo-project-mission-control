import React from 'react';
import { render } from '@testing-library/react';
import DashboardLayout from './DashboardLayout';


it('renders Dashboard layout ', () => {
    const { getByTestId } = render(<DashboardLayout/>)

    expect(getByTestId('dashboard-layout')).toBeTruthy()
})
