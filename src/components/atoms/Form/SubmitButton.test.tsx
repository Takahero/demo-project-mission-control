import React from "react"
import { render } from "../../../utils/testUtils"
import SubmitButton from "./SubmitButton"

it("renders SubmitButton", () => {
    const { getByTestId } = render(
        <SubmitButton
            text="this is text"
            disabled={false}
        />
    )

    expect(getByTestId("submit-button")).toBeTruthy()
})

it("renders button text", () => {
    const { getByText } = render(
        <SubmitButton
            text="this is text"
            disabled={false}
        />
    )

    expect(getByText("this is text")).toBeTruthy()
})

it("should disable", () => {
    const { getByTestId } = render(
        <SubmitButton
            text="this is text"
            disabled={true}
        />
    )

    expect(getByTestId("submit-button")).toBeDisabled()
})