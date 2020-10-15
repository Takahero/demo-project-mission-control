import React, { useCallback } from 'react'
import UnauthedNavMenu from '../molecules/UnauthedNavMenu'
import Logo from '../atoms/Icons/Logo'
import Button from '../atoms/Buttons/Button'
import { useSelector } from 'react-redux'
import { isAuthedSelector } from "../../store/selector"
import { useFirebase } from 'react-redux-firebase'
import { pushHistoryTo } from '../../utils/history'

const Header: React.FC= () => {
    const authed: boolean = useSelector(isAuthedSelector)
    const firebase = useFirebase()

    const logout: () => void = useCallback(
        () => {
            firebase.logout().catch((err) => console.error(err))
            pushHistoryTo("/")
        },
        []
    )

    return (
        <div
            data-testid="header"
        >
            <Logo />
            { authed ?
                <Button
                    text="Sign Out"
                    handleClick={logout}
                />
            :
                <UnauthedNavMenu />
            }
        </div>
    )
}

export default React.memo(Header)
