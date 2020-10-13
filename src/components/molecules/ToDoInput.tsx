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

const ToDoInput = React.forwardRef<HTMLInputElement, Props>(({
    toDo,
    updateToDo,
    completeToDo,
}, ref )=> {
    return (
        <div
            data-testid="to-do-input"
        >
            {/* <Checkbox
                name={value}
                checked={checked}
                handleInputChange={completeToDo}
            /> */}
            <input
                ref={ref}
                value={toDo.name}
                onChange={async (e:any) => {
                    await updateToDo(e.target.value, toDo)
                }
                }
            />
        </div>
    )
})

export default ToDoInput