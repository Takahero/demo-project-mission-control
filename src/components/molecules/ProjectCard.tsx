import React from 'react'
import ProfileCardText from '../atoms/Texts/ProfileCardText'
import ProfileCardTitle from '../atoms/Texts/ProfileCardTitle'

interface Props {
    name: string;
    // dateRange: string;
    authorName: string;
}

const ProjectCard: React.FC<Props> = ({
    name,
    authorName
}) => {
    return (
        <div
            data-testid="project-card"
        >
            <ProfileCardTitle title={name} />
            <ProfileCardText text={authorName} />
        </div>
    )
}

export default ProjectCard