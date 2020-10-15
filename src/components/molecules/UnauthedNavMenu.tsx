import React, { Key } from 'react'
import NavButton from '../atoms/Buttons/NavButton'

const navMenuData = [
    {
        text: "Sign in",
        path: "/signin"
    },
    {
        text: "Sign up",
        path: "/signup"
    }
]

interface NavMenuType {
    text: string;
    path: string;
}

const UnauthedNavMenu: React.FC = () => {
    return (
        <div
            data-testid="unauthed-nav-menu"
        >
            { navMenuData.map((navMenuDatum: NavMenuType, i: Key) =>
                <NavButton
                    key={i}
                    text={navMenuDatum.text}
                    path={navMenuDatum.path}
                />
            )}
        </div>
    )
}

export default React.memo(UnauthedNavMenu)