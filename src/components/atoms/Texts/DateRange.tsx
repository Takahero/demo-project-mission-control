
import React from 'react'

interface Props {
    dateRange: string
}
const DateRange: React.FC<Props> = ({
    dateRange
}) => {
    return (
        <div
            data-testid="date-range"
        >
            {dateRange}
        </div>
    )
}

export default DateRange