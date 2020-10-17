import React from "react"
import DashboardLayout from "../components/templates/DashboardLayout"

const Dashboard: React.FC = () => {
    return (
        <div
            data-testid="dashboard-page"
        >
            <DashboardLayout />
        </div>
    )
}

export default Dashboard
