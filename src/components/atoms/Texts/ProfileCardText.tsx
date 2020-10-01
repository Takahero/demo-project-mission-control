
import React from 'react'

interface Props {
    text: string
}
const ProfileCardText: React.FC<Props> = ({
    text
}) => {
    return (
        <div
            data-testid="profile-card-text"
        >
            {text}
        </div>
    )
}

export default ProfileCardText