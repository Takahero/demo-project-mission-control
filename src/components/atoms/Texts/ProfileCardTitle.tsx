
import React from 'react'

interface Props {
    title: string
}
const ProfileCardTitle: React.FC<Props> = ({
    title
}) => {
    return (
        <div
            data-testid="profile-card-title"
        >
            {title}
        </div>
    )
}

export default ProfileCardTitle