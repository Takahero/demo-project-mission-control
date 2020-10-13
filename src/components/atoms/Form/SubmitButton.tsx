import React from 'react'

interface Props {
    text: string;
    disabled: boolean;
}

const SubmitButton: React.FC<Props> = ({
    text,
    disabled
}) => {
    return (
        <button
            data-testid="submit-button"
            disabled={disabled}
            type="submit"
        >
            {text}
        </button>
    )
}

export default SubmitButton