import React from 'react';
import { render } from '../../utils/testUtils'
import NavMenu from './NavMenu'
import navData from '../../utils/navData'


it('renders NavMenu', () => {
    const { getByTestId } = render(
        <NavMenu
            navData={navData.unauthed}
        />
    )

    expect(getByTestId('nav-menu')).toBeTruthy()
})
