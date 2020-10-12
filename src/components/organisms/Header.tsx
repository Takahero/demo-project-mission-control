import React from 'react'
import UnauthedNavMenu from '../molecules/UnauthedNavMenu'
import Logo from '../atoms/Icons/Logo'
import { isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { authSelector } from '../../store/selector'
import Button from '../atoms/Buttons/Button';
import { useFirebase } from 'react-redux-firebase';
import { pushHistoryTo } from '../../utils/history'


const Header: React.FC = () => {
    const auth = useSelector(authSelector)
    const firebase = useFirebase()
    return (
        <div
            data-testid="header"
        >
            <Logo />
            { isEmpty(auth) ?
                <UnauthedNavMenu /> :
                <Button
                    text="Sign Out"
                    handleClick={() => {
                        firebase.logout().catch((err) => console.error(err))
                        pushHistoryTo("/")
                    }}
                />
            }
        </div>
    )
}

export default Header
