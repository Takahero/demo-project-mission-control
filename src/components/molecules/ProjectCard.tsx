import React, { useMemo } from 'react'
import DateRange from '../atoms/Texts/DateRange'
import Text from '../atoms/Texts/Text'
import Title from '../atoms/Texts/Title'
import { useSelector } from 'react-redux'
import { projectCardInfoSelectorById } from '../../store/selector'
import { RootState } from '../../store'
import { shortFullName } from "../../utils/name"
import { projectDateRange } from "../../utils/date"

interface Props {
    projectId: string;
}

const ProjectCard: React.FC<Props> = ({
    projectId
}) => {
    const memoProjectCardInfoSelectorById = useMemo(() => projectCardInfoSelectorById, [])
    let projectInfo = useSelector((state: RootState) => memoProjectCardInfoSelectorById(state, projectId))
    return (
        <div
            data-testid="project-card"
        >
            <DateRange dateRange={projectDateRange(projectInfo.startDate, projectInfo.endDate)} />
            <Title title={projectInfo.projectName} />
            <Text text={shortFullName(projectInfo.author.firstName, projectInfo.author.lastName)} />
        </div>
    )
}

export default React.memo(ProjectCard)