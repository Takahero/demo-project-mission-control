import React, { Key, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Button from "../atoms/Buttons/Button"
import ToDoForm from "./ToDoForm"
import ToDoListItem from "./ToDoListItem"
import { useParams } from "react-router-dom"
import {
    isProjectAdminSelector,
    toDoIdsSelector,
} from "../../store/selector"
import { RootState } from "../../store"
import { useSelector } from "react-redux"

interface Props {
    requiredResultId: string;
}

const ToDoCheckList: React.FC<Props> = ({
    requiredResultId
}) => {
    const [showInput, setShowInput] = useState(false)
    const memoHideInput = useCallback(() => setShowInput(false), [])
    const memoShowInput = useCallback(() => setShowInput(true), [])

    const { projectId } = useParams<{ projectId: string }>()

    const memoToDoIdsSelector = useMemo(() => toDoIdsSelector, [])
    const toDoIds = useSelector((state: RootState) => memoToDoIdsSelector(state, projectId, requiredResultId))

    const memoIsProjectAdminSelector = useMemo(() => isProjectAdminSelector, [])
    const isProjectAdmin = useSelector((state: RootState) => memoIsProjectAdminSelector(state, projectId))

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef && inputRef.current && inputRef.current.focus()
    })

    return (
        <div
            data-testid="to-do-checklist"
        >
            {
                toDoIds && toDoIds.map((toDoId: string, i: Key) =>
                    <ToDoListItem
                        key={i}
                        requiredResultId={requiredResultId}
                        toDoId={toDoId}
                    />
                )
            }
            {
                isProjectAdmin ?
                    showInput ?
                        <ToDoForm
                            requiredResultId={requiredResultId}
                            setShowInput={memoHideInput}
                            ref={inputRef}
                        />
                    :
                        <Button
                            text="Add to-do"
                            handleClick={memoShowInput}
                        />
                : null
            }
        </div>
    )
}

export default ToDoCheckList
