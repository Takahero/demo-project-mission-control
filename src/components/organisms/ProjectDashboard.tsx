import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from './RequiredResultsSection'
import { projectDateRange } from '../../utils/date'
import { fullName } from '../../utils/name'
import { useFirestore } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { projectSelectorById, authSelector } from '../../store/selector'
import { RootState } from '../../store'
import { getAndListenRequiredResults } from '../../utils/requiredResultsFirestore'

interface Props {
    projectId: string;
}

const ProjectDashboard: React.FC<Props> = ({ projectId }) => {
    const auth = useSelector(authSelector)
    const project = useSelector((state: RootState) => projectSelectorById(state, projectId))
    const firestore = useFirestore()

    if (firestore) {
        getAndListenRequiredResults(firestore, projectId)
    }

    const completeProject = () => {
        firestore.update({ collection: "projects", doc: projectId }, { completed: !project.completed })
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
                    handleInputChange={() => completeProject()}
                    authed={authed}
                    projectId={project.id}
                />
                <RequiredResultsSection
                    projectId={project.id}
                    authed={authed}
                />
            </div>
        )
    }
    return <div data-testid="project-dashboard"></div>

}

export default ProjectDashboard
