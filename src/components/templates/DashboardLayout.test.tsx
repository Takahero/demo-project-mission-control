import React from 'react';
import { render } from '../../utils/testUtils'
import DashboardLayout from './DashboardLayout';



it('renders Dashboard layout ', () => {
    const { getByTestId } = render(<DashboardLayout/>)

    expect(getByTestId('dashboard-layout')).toBeTruthy()
})
