import React, { useState } from 'react'
import Text from '../atoms/Texts/Text';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import ToDoInput from './ToDoInput';

interface Props {
    requiredResultId: string;
    projectId: string;
    toDos: Array<{
        name: string;
        completed: boolean;
    }>;
    authed: boolean;
}

const mockTODOs = [
    {
        name: '30 days of 100 pushups',
        completed: false
    },
    {
        name: '30 days of 100 pushups',
        completed: false
    },
]

const ToDoCheckList: React.FC<Props> = ({
    requiredResultId,
    projectId,
    toDos,
    authed,
}) => {
    const firestore = useFirestore()

    return (
        <div
            data-testid="to-do-checklist"
        >
            {
                mockTODOs.map((toDo, i) =>
                    authed ?
                        <ToDoInput
                            value={toDo.name}
                            checked={toDo.completed}
                            handleInputChange={() => {}}
                            key={i}
                        />
                    :
                        <Text
                            text={toDo.name}
                            key={i}
                        />

                )
            }
            {
                authed && <Button
                    text="Create to-do"
                    handleClick={() => {
                        firestore.update({
                            collection: 'projects',
                            doc: projectId,
                            subcollections: [{
                                collection: 'requiredResults',
                                doc: requiredResultId
                            }],
                            storeAs: 'requiredResults'
                        }, {
                            toDos: firestore.FieldValue.arrayUnion({
                                name: "",
                                completed: false,
                            })
                        }).catch((e: Error) => console.error(e))
                    }}
                />
            }
        </div>
    )
}

export default ToDoCheckList

