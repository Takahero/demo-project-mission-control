import React from "react"
import { render } from "../../utils/testUtils"
import ToDoInput from "./ToDoListItem"

it("renders ToDoInput", () => {
    const { getByTestId } = render(
        <ToDoInput
            requiredResultId="requiredResultId"
            toDoId="toDoId"
    )

    expect(getByTestId("to-do-list-item")).toBeTruthy()
})