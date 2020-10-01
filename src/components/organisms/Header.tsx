import React from 'react'
import NavMenu from '../molecules/NavMenu'
import Logo from '../atoms/Icons/Logo';

const Header: React.FC = () => {
    return (
        <div
            data-testid="header"
        >
            <Logo />
            <NavMenu />
        </div>
    )
}

export default Header
