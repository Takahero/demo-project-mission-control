import React, {
    useCallback,
    useMemo,
    useState
} from "react"
import Checkbox from "../atoms/Form/Checkbox"
import Text from "../atoms/Texts/Text"
import ToDoForm from "./ToDoForm"
import Button from "../atoms/Buttons/Button"
import {
    completeToDo,
    deleteToDo
} from "../../utils/toDosFirestore"
import { useFirestore } from "react-redux-firebase"
import { useParams } from "react-router-dom"
import {
    isProjectAdminSelector,
    toDoSelectorById
} from "../../store/selector"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

interface Props {
    requiredResultId: string;
    toDoId: string;
}

const ToDoListItem: React.FC<Props> = ({
    requiredResultId,
    toDoId,
})=> {
    const [showInput, setShowInput] = useState(false)
    const memoHideInput = useCallback(() => setShowInput(false), [])
    const memoShowInput = useCallback(() => setShowInput(true), [])

    const firestore = useFirestore()
    const { projectId } = useParams<{ projectId: string }>()

    const memoToDosSelector = useMemo(() => toDoSelectorById, [])
    const toDo = useSelector((state: RootState) => memoToDosSelector(state, projectId, requiredResultId, toDoId))

    const memoIsProjectAdminSelector = useMemo(() => isProjectAdminSelector, [])
    const isProjectAdmin = useSelector((state: RootState) => memoIsProjectAdminSelector(state, projectId))

    const memoCompleteToDo: () => void = useCallback(() =>
        isProjectAdmin && toDo && completeToDo(firestore, projectId, requiredResultId, toDo),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [toDo?.name, toDo?.completed]
    )

    const memoDeleteToDo: () => void = useCallback(() =>
        toDo && deleteToDo(firestore, projectId, requiredResultId, toDo),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    if (!toDo) {
        return null
    }

    return (
        <div
            data-testid="to-do-list-item"
        >
            {   showInput ?
                    <ToDoForm
                        requiredResultId={requiredResultId}
                        setShowInput={memoHideInput}
                        update={true}
                        toDoId={toDoId}
                    />
                :
                    <>
                        <Checkbox
                            name={toDoId}
                            checked={toDo.completed}
                            handleInputChange={memoCompleteToDo}
                            disabled={!isProjectAdmin}
                        />
                        <Text text={toDo.name} />
                        { isProjectAdmin &&
                            <>
                                <Button
                                    text="Edit"
                                    handleClick={memoShowInput}
                                />
                                <Button
                                    text="Delete"
                                    handleClick={memoDeleteToDo}
                                />
                            </>
                        }
                    </>
            }
        </div>
    )
}

export default React.memo(ToDoListItem)