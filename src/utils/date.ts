import moment from "moment"

export const projectDateRange = (startDate: Date | string, endDate: Date | string) => {
    return `${moment(startDate).format("MMM Do YYYY")} - ${moment(endDate).format("MMM Do YYYY")}`
}