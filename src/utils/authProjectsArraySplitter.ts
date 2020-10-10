const authProjectsArraySplitter = (projects: any, uid: string) => {
    return projects.reduce(( accumulator: any, currentValue: any ) => {
        currentValue.author.uid === uid ?
            accumulator.userProjects.push(currentValue)
        :
            accumulator.otherProjects.push(currentValue)
        return accumulator
    }, {
        userProjects: [],
        otherProjects: []
    })
}

export default authProjectsArraySplitter