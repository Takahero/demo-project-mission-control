const fromFirestoreObjToArr = (fireStoreObj: any) => {
    return Object.keys(fireStoreObj).map((id) => {
        return {
            id,
            ...fireStoreObj[id]
        }
    })
}

export default fromFirestoreObjToArr