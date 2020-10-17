
import React from "react"

interface Props {
    title: string
}
const Title: React.FC<Props> = ({
    title
}) => {
    return (
        <div
            data-testid="title"
        >
            {title}
        </div>
    )
}

export default React.memo(Title)