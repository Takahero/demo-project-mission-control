import { nanoid } from "@reduxjs/toolkit"
import { ToDoType } from "./firestoreDocumentTypes"

const sortToDosByDate = (toDos: ToDoType[]) => {
    if (toDos) {
        return toDos.slice().sort((a:ToDoType, b:ToDoType) => {
            return +a.createdAt - +b.createdAt
        })
    }
    return null
}

const addToDo = (firestore: any, projectId: string, requiredResultId: string, name: string) => {
    firestore.update({
        collection: "projects",
        doc: projectId,
        subcollections: [{
            collection: "requiredResults",
            doc: requiredResultId
        }],
        storeAs: "requiredResults"
    }, {
        toDos: firestore.FieldValue.arrayUnion({
            name,
            completed: false,
            id: nanoid(),
            createdAt: new Date()
        })
    }).catch((e: Error) => console.error(e))
}

const deleteToDo = (firestore: any, projectId: string, requiredResultId: string, toDo: ToDoType) => {
    toDo && firestore.update({
        collection: "projects",
        doc: projectId,
        subcollections: [{
            collection: "requiredResults",
            doc: requiredResultId
        }],
        storeAs: "requiredResults"
    }, {
        toDos: firestore.FieldValue.arrayRemove(toDo)
    }).catch((e: Error) => console.error(e))
}

const updateToDo = async (firestore: any, projectId: string, requiredResultId: string, name: string, toDo: ToDoType) => {
    if (toDo) {
        await deleteToDo(firestore, projectId, requiredResultId, toDo)
        firestore.update({
            collection: "projects",
            doc: projectId,
            subcollections: [{
                collection: "requiredResults",
                doc: requiredResultId
            }],
            storeAs: "requiredResults"
        }, {
            toDos: firestore.FieldValue.arrayUnion({
                ...toDo,
                name
            })
        }).catch((e: Error) => console.error(e))
    }
}

const completeToDo = async (firestore: any, projectId: string, requiredResultId: string, toDo: ToDoType) => {
    if (toDo) {
        await deleteToDo(firestore, projectId, requiredResultId, toDo)
        firestore.update({
            collection: "projects",
            doc: projectId,
            subcollections: [{
                collection: "requiredResults",
                doc: requiredResultId
            }],
            storeAs: "requiredResults"
        }, {
            toDos: firestore.FieldValue.arrayUnion({
                ...toDo,
                completed: !toDo.completed,
            })
        }).catch((e: Error) => console.error(e))
    }
}

export {
    sortToDosByDate,
    deleteToDo,
    addToDo,
    updateToDo,
    completeToDo
}