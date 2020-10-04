import React from 'react'

interface Props {
    text: string;
    path: string;
}

const NavButton: React.FC<Props> = ({
    text,
    path
}) => {
    return (
        <div
            data-testid="nav-button"
        >
            {text}
        </div>
    )
}

export default NavButton