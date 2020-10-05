import React from 'react'

interface Props {
    text: string;
}

const SubmitButton: React.FC<Props> = ({
    text,
}) => {
    return (
        <button
            data-testid="submit-button"
            type="submit"
        >
            {text}
        </button>
    )
}

export default SubmitButton