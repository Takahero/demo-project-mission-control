import React, { forwardRef, useState } from 'react'
import Label from '../atoms/Form/Label'
import Checkbox from '../atoms/Form/Checkbox'
import Text from '../atoms/Texts/Text';
import ToDoForm from './ToDoForm';
import Button from '../atoms/Buttons/Button';

interface Props {
    projectId: string;
    requiredResultId: string;
    toDo: {
        id: string;
        name: string;
        completed: boolean;
    }
    completeToDo: any;
    authed: boolean;
}

const ToDoListItem: React.FC<Props> = ({
    projectId,
    requiredResultId,
    toDo,
    completeToDo,
    authed
})=> {
    const [showInput, setShowInput] = useState(false)
    return (
        <div
            data-testid="to-do-list-item"
        >
            {   showInput ?
                    <ToDoForm
                        projectId={projectId}
                        requiredResultId={requiredResultId}
                        setShowInput={() => setShowInput(false)}
                        update={true}
                        toDo={toDo}
                    />
                : (
                    <>
                        <Checkbox
                        name={toDo.id}
                        checked={toDo.completed}
                        handleInputChange={completeToDo}
                        />
                        <Text
                            text={toDo.name}
                        />
                        { authed && 
                            <Button
                                text="Edit"
                                handleClick={() => setShowInput(true)}
                            />
                        }
                    </>
                )
            }
        </div>
    )
}

export default ToDoListItem