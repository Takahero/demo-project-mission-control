import React from 'react'
import DateRange from '../atoms/Texts/DateRange'
import Text from '../atoms/Texts/Text'
import Title from '../atoms/Texts/Title'

interface Props {
    name: string;
    dateRange: string;
    authorName: string;
}

const ProjectCard: React.FC<Props> = ({
    name,
    dateRange,
    authorName
}) => {
    return (
        <div
            data-testid="project-card"
        >
            <DateRange dateRange={dateRange} />
            <Title title={name} />
            <Text text={authorName} />
        </div>
    )
}

export default ProjectCard