import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from '../molecules/RequiredResultsSection'
import { projectDateRange } from '../../utils/date'
import { fullName } from '../../utils/name'
import { useFirestore } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { projectsSelector, authSelector } from '../../store/selector'

interface Props {
    projectId?: string;
}

const ProjectDashboard: React.FC<Props> = ({ projectId }) => {
    const auth = useSelector(authSelector)
    const projects = useSelector(projectsSelector)
    const firestore = useFirestore()

	let project: any = null
	if (projects && projects.length > 0) {
        project = projects.find( (project: any) => project.id === projectId )
    }

    const completeProject = (e: Event, id: string, completed: boolean) => {
        e.preventDefault()
        firestore.update({ collection: "projects", doc: id }, { completed: !completed })
    }

    if (project) {
        const authed = project.author.uid === auth.uid
        return (
            <div
                data-testid="project-dashboard"
            >
                <DashboardProjectCard
                    name={project.projectName}
                    author={fullName(project.author.firstName, project.author.lastName)}
                    dateRange={projectDateRange(project.startDate, project.endDate)}
                    accomplishmentStatement={project.accomplishmentStatement}
                    completed={project.completed}
                    handleInputChange={(e: Event) => completeProject(e, project.id, project.completed)}
                    authed={authed}
                    editPath={`/project/${project.id}/edit`}
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
