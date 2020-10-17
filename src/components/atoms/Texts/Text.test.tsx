import React from "react"
import { render } from "../../../utils/testUtils"
import Text from "./Text"

it("renders Text", () => {
    const { getByTestId } = render(<Text text="This is the text" />)

    expect(getByTestId("text")).toBeTruthy()
})

it("renders text", () => {
    const { getByText } = render(<Text text="This is the text" />)

    expect(getByText("This is the text")).toBeTruthy()
})