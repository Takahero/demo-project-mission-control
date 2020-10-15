import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from './RequiredResultsSection'
import { useFirestore } from "react-redux-firebase"
import { getAndListenRequiredResults } from '../../utils/requiredResultsFirestore'
import { ProjectType } from '../../utils/firestoreDocumentTypes';

interface Props {
    project: ProjectType;
    authed: boolean;
}

const ProjectDashboard: React.FC<Props> = ({
    project,
    authed
}) => {
    const firestore = useFirestore()

    if (firestore) {
        getAndListenRequiredResults(firestore, project.id)
    }

    const completeProject = () => {
        firestore.update({ collection: "projects", doc: project.id }, { completed: !project.completed })
    }

    if (project) {
        return (
            <div
                data-testid="project-dashboard"
            >
                <DashboardProjectCard
                    project={project}
                    handleInputChange={() => completeProject()}
                    authed={authed}
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
