
import React from "react"

interface Props {
    name: string;
    checked: boolean;
    disabled?: boolean;
    handleInputChange: () => void;
}

const Checkbox: React.FC<Props> = ({
    name,
    checked,
    disabled,
    handleInputChange
}) => {
    return (
        <input
            data-testid="checkbox"
            type="checkbox"
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={e => {
                e.preventDefault()
                handleInputChange()
            }}
        />
    )
}

export default React.memo(Checkbox)