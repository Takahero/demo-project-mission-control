import { ProjectType } from './firestoreDocumentTypes';

const authProjectIdsArraySplitter = (projects: ProjectType[], uid?: string) => {
    return projects.reduce(( accumulator: any, currentValue: ProjectType ) => {
        currentValue.author.uid === uid ?
            accumulator.user.push(currentValue.id)
        :
            accumulator.other.push(currentValue.id)
        return accumulator
    }, {
        user: [],
        other: []
    })
}

export default authProjectIdsArraySplitter