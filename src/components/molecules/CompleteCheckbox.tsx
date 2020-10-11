import React from 'react'
import Label from '../atoms/Form/Label'
import Checkbox from '../atoms/Form/Checkbox'

interface Props {
    label: string;
    value: string;
    checked: boolean;
    handleInputChange: any;
}

const CompleteCheckbox: React.FC<Props> = ({
    label,
    value,
    checked,
    handleInputChange
}) => {
    return (
        <div
            data-testid="complete-checkbox"
        >
            <Label
                label={label}
                value={value}
            />
            <Checkbox
                name={value}
                checked={checked}
                handleInputChange={handleInputChange}
            />
        </div>
    )
}

export default CompleteCheckbox