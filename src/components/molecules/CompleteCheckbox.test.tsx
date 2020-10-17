import React from "react"
import { render } from "../../utils/testUtils"
import CompleteCheckbox from "./CompleteCheckbox"

it("renders CompleteCheckbox", () => {
    const { getByTestId } = render(
        <CompleteCheckbox
            label="label"
            value="checkbox"
            checked={true}
            handleInputChange={() => {}}
        />
    )

    expect(getByTestId("complete-checkbox")).toBeTruthy()
})