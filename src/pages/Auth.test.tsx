import React from "react"
import { render } from "../utils/testUtils"
import Auth from "./Auth"

it("renders Auth page", () => {
    let { queryByTestId } = render(<Auth />)
    expect(queryByTestId("auth-page")).toBeTruthy()
})