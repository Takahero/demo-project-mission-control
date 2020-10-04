import React from 'react'
import NavMenu from '../molecules/NavMenu'
import Logo from '../atoms/Icons/Logo'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import navData from '../../utils/navData'

const Header: React.FC = () => {
    let user = useSelector((state: RootState) => state.user)
    return (
        <div
            data-testid="header"
        >
            <Logo />
            <NavMenu 
              navData={user ? navData.authed : navData.unauthed} 
            />
        </div>
    )
}

export default Header
