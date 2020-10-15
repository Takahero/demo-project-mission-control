import React from 'react'
import UnauthedNavMenu from '../molecules/UnauthedNavMenu'
import Logo from '../atoms/Icons/Logo'
import Button from '../atoms/Buttons/Button';
import { useFirebase } from 'react-redux-firebase';
import { pushHistoryTo } from '../../utils/history'

interface Props {
    authed: boolean;
}

const Header: React.FC<Props> = ({ authed }) => {
    const firebase = useFirebase()
    return (
        <div
            data-testid="header"
        >
            <Logo />
            { authed ?
                <Button
                    text="Sign Out"
                    handleClick={() => {
                        firebase.logout().catch((err) => console.error(err))
                        pushHistoryTo("/")
                }}
                />
            :
                <UnauthedNavMenu />
            }
        </div>
    )
}

export default Header
