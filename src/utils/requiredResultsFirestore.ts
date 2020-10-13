const getAndListenRequiredResults = (firestore: any, projectId: string) => {
    firestore.get({
        collection: 'projects',
        doc: projectId,
        subcollections: [{ collection: 'requiredResults' }],
        storeAs: `requiredResults/${projectId}`,
        orderBy: ['createdAt', 'asc']
    })
    firestore.setListeners([
        {
            collection: "projects",
            doc: projectId,
            subcollections: [{ collection: 'requiredResults' }],
            storeAs: `requiredResults/${projectId}`,
            orderBy: ['createdAt', 'asc']
        },
    ])
}

const addRequiredResult = (firestore: any, projectId: string, values: any) => {
    firestore.add({
        collection: 'projects',
        doc: projectId,
        subcollections: [{ collection: 'requiredResults' }],
        storeAs: 'requiredResults'
    }, {
        ...values,
        completed: false,
        createdAt: firestore.FieldValue.serverTimestamp(),
    }).catch((e: Error) => console.error(e))
}

const updateRequiredResult = (firestore: any, projectId: string, requiredResultId:string, values: any) => {
    firestore.update({
        collection: 'projects',
        doc: projectId,
        subcollections: [{
            collection: 'requiredResults',
            doc: requiredResultId
        }],
        storeAs: 'requiredResults'
    }, {
        ...values,
    }).catch((e: Error) => console.error(e))
}

const completeRequiredResult = (firestore: any, projectId: string, requiredResultId:string, completed: boolean) => {
    firestore.update({
        collection: 'projects',
        doc: projectId,
        subcollections: [{
            collection: 'requiredResults',
            doc: requiredResultId
        }],
        storeAs: 'requiredResults'
    }, {
        completed: !completed
    }).catch((e: Error) => console.error(e))
}

const deleteRequiredResult = (firestore: any, projectId: string, requiredResultId:string) => {
    firestore.delete({
        collection: 'projects',
        doc: projectId,
        subcollections: [{
            collection: 'requiredResults',
            doc: requiredResultId
        }],
        storeAs: 'requiredResults'
    }).catch((e: Error) => console.error(e))
}

export {
    getAndListenRequiredResults,
    addRequiredResult,
    updateRequiredResult,
    completeRequiredResult,
    deleteRequiredResult
}