import { createBrowserHistory } from "history"

const history = createBrowserHistory()
export default history

const pushHistoryTo = (path: string) => {
    history.push(path)
}

const goBackHistory = (path: string) => {
    history.go(-1)
}

export { 
    pushHistoryTo,
    goBackHistory
}