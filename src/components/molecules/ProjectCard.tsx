import React from 'react'
import ProfileCardText from '../atoms/Texts/ProfileCardText'

interface Props {
    name: string;
    startDate: Date;
    endDate: Date;
    author: {
        firstName: string;
        lastName: string;
    }
}

const ProjectCard: React.FC<Props> = ({
    name,
    startDate,
    endDate,
    author
}) => {
    return (
        <div
            data-testid="project-card"
        >
            { name }
            { startDate.toString() }
            { endDate.toString() } 
            { author.firstName }
            { author.lastName }
            <ProfileCardText />
        </div>
    )
}

export default ProjectCard