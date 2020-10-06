import React from 'react';
import { render } from '../../utils/testUtils'
import UnauthedNavMenu from './UnauthedNavMenu'


it('renders UnauthedNavMenu', () => {
    const { getByTestId } = render(<UnauthedNavMenu />)

    expect(getByTestId('unauthed-nav-menu')).toBeTruthy()
})
