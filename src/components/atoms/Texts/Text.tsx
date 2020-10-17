
import React from "react"

interface Props {
    text: string
}

const Text: React.FC<Props> = ({
    text
}) => {
    return (
        <div
            data-testid="text"
        >
            {text}
        </div>
    )
}

export default React.memo(Text)