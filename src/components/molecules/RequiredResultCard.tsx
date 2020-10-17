import React, {
    useCallback,
    useMemo,
    useState
} from "react"
import Title from "../atoms/Texts/Title"
import DateRange from "../atoms/Texts/DateRange"
import RequiredResultForm from "../organisms/RequiredResultForm"
import Button from "../atoms/Buttons/Button"
import { useFirestore } from "react-redux-firebase"
import CompleteCheckbox from "./CompleteCheckbox"
import {
    completeRequiredResult,
    deleteRequiredResult
} from "../../utils/requiredResultsFirestore"
import ToDoCheckList from "./ToDoCheckList"
import { projectDateRange } from "../../utils/date"
import {
    isProjectAdminSelector,
    requiredResultSelectorById
} from "../../store/selector"
import { RootState } from "../../store"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

interface Props {
    requiredResultId: string;
}

const RequiredResultCard: React.FC<Props> = ({
    requiredResultId,
}) => {
    const [showingForm, setShowingForm] = useState(false)
    const hideForm = useCallback(() => setShowingForm(false), [])
    const showForm = useCallback(() => setShowingForm(true), [])

    const firestore = useFirestore()
    const { projectId } = useParams<{ projectId: string }>()

    const memoRequiredResultSelectorById = useMemo(() => requiredResultSelectorById, [])
    const requiredResult = useSelector((state: RootState) => memoRequiredResultSelectorById(state, projectId, requiredResultId))

    const memoIsProjectAdminSelector = useMemo(() => isProjectAdminSelector, [])
    const isProjectAdmin = useSelector((state: RootState) => memoIsProjectAdminSelector(state, projectId))


    const memoCompleteRequiredResult = useCallback(() =>
        completeRequiredResult(firestore, projectId, requiredResultId, requiredResult.completed),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [requiredResult.completed]
    )

    const memoDeleteRequiredResult = useCallback(() =>
        deleteRequiredResult(firestore, projectId, requiredResultId),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
        <div
            data-testid="required-result-card"
        >
            {
                isProjectAdmin ? (
                    showingForm ?
                        <RequiredResultForm
                            requiredResultId={requiredResultId}
                            setShowingForm={hideForm}
                        />
                    :
                        <>
                            <Title title={requiredResult.name} />
                            <DateRange dateRange={projectDateRange(requiredResult.startDate, requiredResult.endDate)} />
                            <CompleteCheckbox
                                label="Complete"
                                value="completed"
                                checked={requiredResult.completed}
                                handleInputChange={memoCompleteRequiredResult}
                            />
                            <Button
                                text="Update Required Result"
                                handleClick={showForm}
                            />
                            <Button
                                text="Delete"
                                handleClick={memoDeleteRequiredResult}
                            />
                        </>
                ) : null
            }
            <ToDoCheckList requiredResultId={requiredResultId} />
        </div>
    )
}

export default React.memo(RequiredResultCard)
