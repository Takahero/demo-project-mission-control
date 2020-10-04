import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    text: string;
    path: string;
}

const NavButton: React.FC<Props> = ({
    text,
    path
}) => {
    return (
        <Link
            data-testid="nav-button"
            to={path}
        >
            {text}
        </Link>
    )
}

export default NavButton