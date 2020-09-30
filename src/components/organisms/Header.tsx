import React from 'react'
// import Logo from '../atoms/Logo'
import NavMenu from '../molcules/NavMenu'

const Header: React.FC = () => {
    return (
        <div
            data-testid="header"
        >
            {/* <Logo /> */}
            <NavMenu />
        </div>
    )
}

export default Header
