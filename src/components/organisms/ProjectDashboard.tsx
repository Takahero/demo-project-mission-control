import React from "react"
import DashboardProjectCard from "../molecules/DashboardProjectCard"
import RequiredResultsSection from "./RequiredResultsSection"
import {  useFirestoreConnect } from "react-redux-firebase"
import { useParams } from "react-router-dom"

interface Params {
    projectId: string;
}

const ProjectDashboard: React.FC = () => {
    const { projectId } = useParams<Params>()
    useFirestoreConnect([
        {
            collection: "projects",
            doc: projectId,
            subcollections: [{ collection: "requiredResults" }],
            storeAs: `requiredResults/${projectId}`,
            orderBy: ["createdAt", "asc"]
        }
    ])

    return (
        <div
            data-testid="project-dashboard"
        >
            <DashboardProjectCard />
            <RequiredResultsSection />
        </div>
    )
}

export default React.memo(ProjectDashboard)