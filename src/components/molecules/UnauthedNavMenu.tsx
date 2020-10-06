import React from 'react'
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

const UnauthedNavMenu: React.FC = () => {
    return (
        <div
            data-testid="unauthed-nav-menu"
        >
            { navMenuData.map((navMenuDatum, i) => 
                <NavButton 
                    key={i}
                    text={navMenuDatum.text}
                    path={navMenuDatum.path}
                />
            )}
        </div>
    )
}

export default UnauthedNavMenu