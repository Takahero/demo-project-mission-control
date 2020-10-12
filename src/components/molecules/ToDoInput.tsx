import React from 'react'
import Label from '../atoms/Form/Label'
import Checkbox from '../atoms/Form/Checkbox'
import Text from '../atoms/Texts/Text';

interface Props {
    value: string;
    checked: boolean;
    handleInputChange: any;
}

const ToDoInput: React.FC<Props> = ({
    value,
    checked,
    handleInputChange,
}) => {
    return (
        <div
            data-testid="to-do-input"
        >
            <Checkbox
                name={value}
                checked={checked}
                handleInputChange={handleInputChange}
            />
            <input
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default ToDoInput