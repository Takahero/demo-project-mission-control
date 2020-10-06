import { createBrowserHistory } from "history"

const history = createBrowserHistory()
export default history

const pushHistoryTo = (path: string) => {
    history.push(path)
}

export { pushHistoryTo }