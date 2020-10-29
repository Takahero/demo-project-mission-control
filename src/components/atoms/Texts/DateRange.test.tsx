import React from "react"
import { render } from "../../../utils/testUtils"
import DateRange from "./DateRange"

it("renders DateRange", () => {
    const { getByTestId } = render(<DateRange dateRange={"Oct 1st 2020 - Dec 12th 2020"} />)

    expect(getByTestId("date-range")).toBeTruthy()
})

it("renders text", () => {
    const { getByText } = render(<DateRange dateRange={"Oct 1st 2020 - Dec 12th 2020"} />)

    expect(getByText("Oct 1st 2020 - Dec 12th 2020")).toBeTruthy()
})