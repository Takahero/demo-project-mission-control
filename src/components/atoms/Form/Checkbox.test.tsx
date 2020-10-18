import React from "react"
import { render } from "../../../utils/testUtils"
import Checkbox from "./Checkbox"

it("renders Checkbox", () => {
    const { getByTestId } = render(
        <Checkbox
            name="checkbox"
            checked={false}
            handleInputChange={() => {}}
        />
    )

    expect(getByTestId("checkbox")).toBeTruthy()
})

it("should be checked when value is true", () => {
    const { getByTestId } = render(
        <Checkbox
            name="checkbox"
            checked={true}
            handleInputChange={() => {}}
        />
    )

    expect(getByTestId("checkbox")).toBeChecked()
})

it("should disable", () => {
    const { getByTestId } = render(
        <Checkbox
            name="checkbox"
            checked={false}
            handleInputChange={() => {}}
            disabled={true}
        />
    )

    expect(getByTestId("checkbox")).toBeDisabled()
})