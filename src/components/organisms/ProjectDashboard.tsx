import React from 'react'
import DashboardProjectCard from '../molecules/DashboardProjectCard'
import RequiredResultsSection from './RequiredResultsSection'
import { useFirestore, useFirestoreConnect } from "react-redux-firebase"
import { ProjectType } from '../../utils/firestoreDocumentTypes'
import { useSelector } from 'react-redux'
import { projectSelectorById } from '../../store/selector'
import { useMemo } from 'react'
import { RootState } from '../../store'
import { useParams } from 'react-router-dom'

interface Params {
    projectId: string;
}

const ProjectDashboard: React.FC = () => {
    const { projectId } = useParams<Params>()
    useFirestoreConnect([
        {
            collection: "projects",
            doc: projectId,
            subcollections: [{ collection: 'requiredResults' }],
            storeAs: `requiredResults/${projectId}`,
            orderBy: ['createdAt', 'asc']
        }
    ])

    return (
        <div
            data-testid="project-dashboard"
        >
            <DashboardProjectCard />
            {/* <RequiredResultsSection
                projectId={project.id}
                authed={authed}
            /> */}
        </div>
    )
}

export default React.memo(ProjectDashboard)
