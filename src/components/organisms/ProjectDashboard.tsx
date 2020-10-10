import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'
import { projectDateRange } from '../../utils/date'
import { fullName } from '../../utils/name'
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import fromFirestoreObjToArr from '../../utils/fromFirestoreObjToArr';
import { projectsSelector, authSelector } from '../../store/selector'

interface Props {
    projectId?: string;
}

const ProjectDashboard: React.FC<Props> = ({ projectId }) => {
    const auth = useSelector(authSelector)
    const projects = useSelector(projectsSelector)

	let projectArr: any = null
	let project: any = null
	if (projects) {
		projectArr = fromFirestoreObjToArr(projects)
        project = projectArr.find( (project: any) => project.id === projectId )
    }

    if (project) {
        return (
            <div
                data-testid="project-dashboard"
            >
                <DashboardProjectCard
                    name={project.projectName}
                    author={fullName(project.author.firstName, project.author.lastName)}
                    dateRange={projectDateRange(project.startDate, project.endDate)}
                    accomplishmentStatement={project.accomplishmentStatement}
                />
                <RequiredResultsSection
                    requiredResults={project.requiredResults}
                />
            </div>
        )
    }
    return <div data-testid="project-dashboard"></div>

}

export default ProjectDashboard
