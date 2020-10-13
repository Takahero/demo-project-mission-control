import React, { useEffect, useRef, useState } from 'react'
import Text from '../atoms/Texts/Text';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import { nanoid } from 'nanoid'
import ToDoForm from './ToDoForm';

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
    const firestore = useFirestore()
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef && inputRef.current && inputRef.current.focus()
    })

    const addToDo = (projectId: string, requiredResultId: string, name: string) => {
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
                name,
                completed: false,
                id: nanoid()
            })
        }).catch((e: Error) => console.error(e))
    }

    // const updateToDo = async (name: string, toDo: any) => {

    //         await toDo && firestore.update({
    //             collection: 'projects',
    //             doc: projectId,
    //             subcollections: [{
    //                 collection: 'requiredResults',
    //                 doc: requiredResultId
    //             }],
    //             storeAs: 'requiredResults'
    //         }, {
    //             toDos: firestore.FieldValue.arrayRemove(toDo)
    //         }).catch((e: Error) => console.error(e))
    //         await firestore.update({
    //             collection: 'projects',
    //             doc: projectId,
    //             subcollections: [{
    //                 collection: 'requiredResults',
    //                 doc: requiredResultId
    //             }],
    //             storeAs: 'requiredResults'
    //         }, {
    //             toDos: firestore.FieldValue.arrayUnion({
    //                 name,
    //                 completed: toDo.completed,
    //                 id: toDo.id
    //             })
    //         }).catch((e: Error) => console.error(e))

    // }

    // const completeToDo = (completed: boolean, toDoId: string) => {
    //     firestore.update({
    //         collection: 'projects',
    //         doc: projectId,
    //         subcollections: [{
    //             collection: 'requiredResults',
    //             doc: requiredResultId
    //         }],
    //         storeAs: 'requiredResults'
    //     }, {
    //         toDos: firestore.FieldValue.arrayUnion({
    //             completed: !completed,
    //             id: toDoId
    //         })
    //     }).catch((e: Error) => console.error(e))
    // }

    return (
        <div
            data-testid="to-do-checklist"
        >
            {
                toDos && toDos.map((toDo, i) =>
                <Text
                    text={toDo.name}
                    key={i}
                />
                )
            }
            {
                authed && showInput ?
                    <ToDoForm
                        requiredResultId={requiredResultId}
                        projectId={projectId}
                        addToDo={addToDo}
                        setShowInput={() => setShowInput(false)}
                        ref={inputRef}
                    />
                :
                    <Button
                        text="Add to-do"
                        handleClick={() => setShowInput(true)}
                    />
            }
        </div>
    )
}

export default ToDoCheckList

