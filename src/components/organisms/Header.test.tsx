import React from "react"
import { render } from "../../utils/testUtils"
import Header from "./Header"

it("renders Header", () => {
    const { getByTestId } = render(<Header/>)

    expect(getByTestId("header")).toBeTruthy()
})