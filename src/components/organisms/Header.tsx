import React from 'react'
import UnauthedNavMenu from '../molecules/UnauthedNavMenu'
import Logo from '../atoms/Icons/Logo'
import SignOutButton from '../atoms/Buttons/SignOutButton'
import { isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'


const Header: React.FC = () => {
    const auth = useSelector((state: RootState) => state.firebase.auth)
    return (
        <div
            data-testid="header"
        >
            <Logo />
            { isEmpty(auth) ? <UnauthedNavMenu /> : <SignOutButton /> }
        </div>
    )
}

export default Header
