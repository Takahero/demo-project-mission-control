
import { nanoid } from 'nanoid'

const sortToDosByDate = (toDos: any) => {
    return toDos.slice().sort((a:any, b:any) => {
        return a.createdAt - b.createdAt
    })
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

// const updateToDo = (firestore: any, projectId: string, toDoId: string, name: string) => {
//     firestore.update({
//         collection: 'projects',
//         doc: projectId,
//     }, {
//         toDos: firestore.FieldValue.arrayUnion({
//             id: toDoId,
//             name
//         })
//     }).catch((e: Error) => console.error(e))
// }

// const completeToDo = async (firestore: any, projectId: string, requiredResultId: string, toDo: any) => {
//     await toDo && firestore.update({
//         collection: 'projects',
//         doc: projectId,
//         subcollections: [{
//             collection: 'requiredResults',
//             doc: requiredResultId
//         }],
//         storeAs: 'requiredResults'
//     }, {
//         toDos: firestore.FieldValue.arrayRemove(toDo)
//     }).catch((e: Error) => console.error(e))
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
//             ...toDo,
//             completed: !toDo.completed,
//         })
//     }).catch((e: Error) => console.error(e))
// }

// const deleteRequiredResult = (firestore: any, projectId: string, requiredResultId:string) => {
//     firestore.delete({
//         collection: 'projects',
//         doc: projectId,
//         subcollections: [{
//             collection: 'requiredResults',
//             doc: requiredResultId
//         }],
//         storeAs: 'requiredResults'
//     }).catch((e: Error) => console.error(e))
// }


export {
    sortToDosByDate,
    addToDo,
}