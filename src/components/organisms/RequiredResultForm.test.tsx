import React from "react"
import { render } from "../../utils/testUtils"
import RequiredResultForm from "./RequiredResultForm"

it("renders RequiredResultForm", () => {
    const { getByTestId } = render(
        <RequiredResultForm
            requiredResultId="requiredResultId"
            setShowingForm={() => {}}
        />
    )

    expect(getByTestId("required-result-form")).toBeTruthy()
})