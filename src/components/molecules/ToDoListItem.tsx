import React, { forwardRef } from 'react'
import Label from '../atoms/Form/Label'
import Checkbox from '../atoms/Form/Checkbox'
import Text from '../atoms/Texts/Text';

interface Props {
    toDo: {
        id: string;
        name: string;
        completed: boolean;
    }
    updateToDo: any;
    completeToDo: any;
}

const ToDoListItem: React.FC<Props> = ({
    toDo,
    updateToDo,
    completeToDo,
})=> {
    return (
        <div
            data-testid="to-do-list-item"
        >
            <Checkbox
                name={toDo.id}
                checked={toDo.completed}
                handleInputChange={completeToDo}
            />
            <Text
                text={toDo.name}
            />
        </div>
    )
}

export default ToDoListItem