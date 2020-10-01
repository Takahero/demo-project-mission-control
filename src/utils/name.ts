
export const shortFullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName.substring(0, 1)}.`
}

export const fullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`
}