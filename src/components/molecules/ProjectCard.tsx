import React from 'react'
import ProfileCardText from '../atoms/Texts/ProfileCardText'
import ProfileCardTitle from '../atoms/Texts/ProfileCardTitle'

interface Props {
    name: string;
    // dateRange: string;
    author: {
        firstName: string;
        lastName: string;
    }
}

const ProjectCard: React.FC<Props> = ({
    name,
    author
}) => {
    return (
        <div
            data-testid="project-card"
        >
            <ProfileCardTitle title={name} />
            <ProfileCardText text={`${author.firstName} ${author.lastName}`} />
        </div>
    )
}

export default ProjectCard