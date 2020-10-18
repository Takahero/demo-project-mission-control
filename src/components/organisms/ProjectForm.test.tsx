import React from "react"
import { render } from "../../utils/testUtils"
import ProjectForm from "./ProjectForm"

it("renders ProjectForm", () => {
    const { getByTestId } = render(<ProjectForm/>)

    expect(getByTestId("project-form")).toBeTruthy()
})