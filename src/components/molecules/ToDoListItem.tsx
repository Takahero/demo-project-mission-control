import React, { useState } from 'react'
import Checkbox from '../atoms/Form/Checkbox'
import Text from '../atoms/Texts/Text';
import ToDoForm from './ToDoForm';
import Button from '../atoms/Buttons/Button';
import { completeToDo, deleteToDo } from '../../utils/toDosFirestore';
import { useFirestore } from 'react-redux-firebase';
import { ToDoType } from '../../utils/firestoreDocumentTypes';

interface Props {
    projectId: string;
    requiredResultId: string;
    toDo: ToDoType;
    authed: boolean;
}

const ToDoListItem: React.FC<Props> = ({
    projectId,
    requiredResultId,
    toDo,
    authed
})=> {
    const firestore = useFirestore()
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
                        handleInputChange={() => completeToDo(firestore, projectId, requiredResultId, toDo)}
                        />
                        <Text
                            text={toDo.name}
                        />
                        { authed &&
                            <>
                                <Button
                                    text="Edit"
                                    handleClick={() => setShowInput(true)}
                                />
                                <Button
                                    text="Delete"
                                    handleClick={() => deleteToDo(firestore, projectId, requiredResultId, toDo)}
                                />
                            </>
                        }
                    </>
                )
            }
        </div>
    )
}

export default ToDoListItem