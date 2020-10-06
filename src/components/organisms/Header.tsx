import React from 'react'
import UnauthedNavMenu from '../molecules/UnauthedNavMenu'
import Logo from '../atoms/Icons/Logo'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import SignOutButton from '../atoms/Buttons/SignOutButton';

const Header: React.FC = () => {
    let { user } = useSelector((state: RootState) => state.user)
    return (
        <div
            data-testid="header"
        >
            <Logo />
            { user ? <SignOutButton /> : <UnauthedNavMenu />}
        </div>
    )
}

export default Header
