import React from 'react'
import NavButton from '../atoms/Buttons/NavButton'

interface Props {
    navData: Array<{
        text: string;
        path: string;
    }>
}
const NavMenu: React.FC<Props> = ({ navData }) => {
    return (
        <div
            data-testid="nav-menu"
        >
            { navData.map((navDatum, i) => 
                <NavButton 
                    key={i}
                    text={navDatum.text}
                    path={navDatum.path}
                />
            )}
        </div>
    )
}

export default NavMenu