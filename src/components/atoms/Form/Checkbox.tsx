
import React from 'react'

interface Props {
    name: string;
    checked: boolean;
    handleInputChange: () => void;
}

const Checkbox: React.FC<Props> = ({
    name,
    checked,
    handleInputChange
}) => {
    return (
        <input
            data-testid="checkbox"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={e => {
                e.preventDefault()
                handleInputChange()
            }}
        />
    )
}

export default React.memo(Checkbox)