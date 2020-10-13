
import React from 'react'

interface Props {
    label: string;
    value: string;
}

const Label: React.FC<Props> = ({
    label,
    value
}) => {
    return (
        <label
            data-testid="label"
            htmlFor={value}
        >
            {label}
        </label>
    )
}

export default Label