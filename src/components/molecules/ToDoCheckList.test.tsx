import React from "react"
import { render } from "../../utils/testUtils"
import ToDoCheckList from "./ToDoCheckList"

it("renders ToDoCheckList", () => {
    const { getByTestId } = render(<ToDoCheckList requiredResultId="requiredResultId"/>)

    expect(getByTestId("to-do-checklist")).toBeTruthy()
})