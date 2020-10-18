import React from "react"
import { render } from "../utils/testUtils"
import Dashboard from "./Dashboard"

it("renders Auth page", () => {
    let { queryByTestId } = render(<Dashboard />)
    expect(queryByTestId("dashboard-page")).toBeTruthy()
})