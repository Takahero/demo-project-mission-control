import React from "react"
import Header from "../organisms/Header"
import ProjectDashboard from "../organisms/ProjectDashboard"
import ProjectListSection from "../organisms/ProjectListSection"
import {
    Route,
    Redirect,
    Switch
} from "react-router-dom"
import ProjectForm from "../organisms/ProjectForm"
import { useSelector } from "react-redux"
import { newestProjectIdSelector } from "../../store/selector"

const DashboardLayout: React.FC = () => {
    const newestProjectId = useSelector(newestProjectIdSelector)
    return (
        <div
            data-testid="dashboard-layout"
        >
            { newestProjectId &&
                <Redirect
                    exact from="/project"
                    to={`/project/${newestProjectId}`}
                />
            }

            <Header />
            <ProjectListSection />
            <Switch>
                <Route
                    exact path={["/project/create", "/project/:projectId/edit"]}
                    component={ProjectForm}
                />
                <Route
                    path="/project/:projectId"
                    component={ProjectDashboard}
                />
            </Switch>
        </div>
    )
}

export default React.memo(DashboardLayout)