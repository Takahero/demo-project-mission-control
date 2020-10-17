import React, {
    Key,
    useCallback,
    useMemo,
    useState
} from "react"
import RequiredResultCard from "../molecules/RequiredResultCard"
import Title from "../atoms/Texts/Title"
import RequiredResultForm from "./RequiredResultForm"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import {
    requiredResultIdsSelector,
    isProjectAdminSelector
} from "../../store/selector"
import Button from "../atoms/Buttons/Button"
import { useParams } from "react-router-dom"

const RequiredResultsSection: React.FC = () => {
    const [showingForm, setShowingForm] = useState(false)
    const hideForm = useCallback(() => setShowingForm(false), [])
    const showForm = useCallback(() => setShowingForm(true), [])

    const { projectId } = useParams<{ projectId: string }>()

    const memoRequiredResultIdsSelector = useMemo(() => requiredResultIdsSelector, [])
    const requiredResultIds = useSelector((state: RootState) => memoRequiredResultIdsSelector(state, projectId))

    const memoIsProjectAdminSelector = useMemo(() => isProjectAdminSelector, [])
    const isProjectAdmin = useSelector((state: RootState) => memoIsProjectAdminSelector(state, projectId))

    return (
        <div
            data-testid="required-results-section"
        >
            <Title title="Required Results" />
            {
                requiredResultIds && requiredResultIds.length > 0 &&
                    requiredResultIds.map((requiredResultId: string, i: Key) =>
                        <RequiredResultCard
                            key={i}
                            requiredResultId={requiredResultId}
                        />
                    )
            }
            {
                isProjectAdmin ? (
                    showingForm ?
                        <RequiredResultForm
                            setShowingForm={hideForm}
                        />
                    :
                        <Button
                            text="Create Required Result"
                            handleClick={showForm}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultsSection