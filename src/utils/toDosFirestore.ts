import { nanoid } from '@reduxjs/toolkit'

const sortToDosByDate = (toDos: any) => {
    if (toDos) {
        return toDos.slice().sort((a:any, b:any) => {
            return a.createdAt - b.createdAt
        })
    }
    return null
}

const addToDo = (firestore: any, projectId: string, requiredResultId: string, name: string) => {
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
            id: nanoid(),
            createdAt: new Date()
        })
    }).catch((e: Error) => console.error(e))
}

const deleteToDo = (firestore: any, projectId: string, requiredResultId: string, toDo: any) => {
    toDo && firestore.update({
        collection: 'projects',
        doc: projectId,
        subcollections: [{
            collection: 'requiredResults',
            doc: requiredResultId
        }],
        storeAs: 'requiredResults'
    }, {
        toDos: firestore.FieldValue.arrayRemove(toDo)
    }).catch((e: Error) => console.error(e))
}

const updateToDo = async (firestore: any, projectId: string, requiredResultId: string, name: string, toDo: any) => {
    if (toDo) {
        await deleteToDo(firestore, projectId, requiredResultId, toDo)
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
                ...toDo,
                name
            })
        }).catch((e: Error) => console.error(e))
    }
}

const completeToDo = async (firestore: any, projectId: string, requiredResultId: string, toDo: any) => {
    if (toDo) {
        await deleteToDo(firestore, projectId, requiredResultId, toDo)
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