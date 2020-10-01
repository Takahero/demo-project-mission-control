import moment from 'moment'

export const projectDateRange = (startDate: Date, endDate: Date) => {
    return `${moment(startDate).format('MMM Do YYYY')} - ${moment(endDate).format('MMM Do YYYY')}`
}