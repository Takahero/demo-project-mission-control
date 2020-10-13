import React, { useEffect, useRef, useState } from 'react'
import Button from '../atoms/Buttons/Button';
import ToDoForm from './ToDoForm';
import ToDoListItem from './ToDoListItem';

interface Props {
    requiredResultId: string;
    projectId: string;
    toDos: Array<{
        id: string;
        name: string;
        completed: boolean;
    }>;
    authed: boolean;
}

const ToDoCheckList: React.FC<Props> = ({
    requiredResultId,
    projectId,
    toDos,
    authed,
}) => {
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef && inputRef.current && inputRef.current.focus()
    })

    return (
        <div
            data-testid="to-do-checklist"
        >
            {
                toDos && toDos.map((toDo, i) =>
                    <ToDoListItem
                        key={i}
                        projectId={projectId}
                        requiredResultId={requiredResultId}
                        toDo={toDo}
                        authed={authed}
                    />
                )
            }
            {
                authed ?
                    showInput ?
                        <ToDoForm
                            requiredResultId={requiredResultId}
                            projectId={projectId}
                            setShowInput={() => setShowInput(false)}
                            ref={inputRef}
                        />
                    :
                        <Button
                            text="Add to-do"
                            handleClick={() => setShowInput(true)}
                        />
                : <></>
            }
        </div>
    )
}

export default ToDoCheckList

