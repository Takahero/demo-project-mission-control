import React from "react"
import { render } from "../../utils/testUtils"
import ProjectCard from "./ProjectCard"

it("renders ProjectCard", () => {
    const { getByTestId } = render(<ProjectCard projectId="projectId" />)

    expect(getByTestId("project-card")).toBeTruthy()
})