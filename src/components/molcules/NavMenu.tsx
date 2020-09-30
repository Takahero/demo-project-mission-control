import React from 'react'
import NavButton from '../atoms/Buttons/NavButton'

const NavMenu: React.FC = () => {
    return (
        <div
            data-testid="nav-menu"
        >
            <NavButton />
        </div>
    )
}

export default NavMenu