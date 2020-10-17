import React from "react"
import { render } from "../../utils/testUtils"
import DashboardProjectCard from "./DashboardProjectCard"

it("renders DashboardProjectCard", () => {
    const { getByTestId } = render(<DashboardProjectCard />)

    expect(getByTestId("dashboard-project-card")).toBeTruthy()
})