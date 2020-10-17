import React from "react"
import { render } from "../../../utils/testUtils"
import Logo from "./Logo"

it("renders Logo", () => {
    const { getByTestId } = render(<Logo/>)

    expect(getByTestId("logo")).toBeTruthy()
})