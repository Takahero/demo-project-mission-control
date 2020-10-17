import React from "react"
import { render } from "../../../utils/testUtils"
import Title from "./Title"

it("renders Title", () => {
    const { getByTestId } = render(<Title title="This is the title" />)

    expect(getByTestId("title")).toBeTruthy()
})

it("renders title", () => {
    const { getByText } = render(<Title title="This is the title" />)

    expect(getByText("This is the title")).toBeTruthy()
})