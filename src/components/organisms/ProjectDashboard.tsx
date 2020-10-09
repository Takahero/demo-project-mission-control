import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'
import { projectDateRange } from '../../utils/date'
import { fullName } from '../../utils/name'
import { mockProjects } from '../../utils/mockProjectsData'
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import fromFirestoreObjToArr from '../../utils/fromFirestoreObjToArr';

interface Props {
    projectId?: string;
}

const ProjectDashboard: React.FC<Props> = ({ projectId }) => {
    const auth = useSelector((state: RootState) => state.firebase.auth)
    const { projects } = useSelector((state: RootState) => state.firestore.data)

	let projectArr: any = null
	let project: any = null
	if (projects) {
		projectArr = fromFirestoreObjToArr(projects)
        project = projectArr.find( (project: any) => project.id === projectId )
    }

    if (project) {
        console.log(project)
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
    return <></>

}

export default ProjectDashboard
