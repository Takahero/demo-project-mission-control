import React from "react"
import { render } from "../../utils/testUtils"
import RequiredResultCard from "./RequiredResultCard"

it("renders RequiredResultCard", () => {
    const { getByTestId } = render(<RequiredResultCard requiredResultId="requiredResultId" />)

    expect(getByTestId("required-result-card")).toBeTruthy()
})