import React from "react"
import { render } from "../../utils/testUtils"
import SignInForm from "./SignInForm"

it("renders SignInForm", () => {
    const { getByTestId } = render(<SignInForm />)

    expect(getByTestId("sing-in-form")).toBeTruthy()
})