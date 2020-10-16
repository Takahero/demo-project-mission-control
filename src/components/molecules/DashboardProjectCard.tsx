import React, { useCallback, useMemo } from 'react'
import Title from '../atoms/Texts/Title'
import Text from '../atoms/Texts/Text'
import CompleteCheckbox from './CompleteCheckbox'
import NavButton from '../atoms/Buttons/NavButton'
import Button from '../atoms/Buttons/Button'
import { useFirestore } from 'react-redux-firebase'
import { pushHistoryTo } from '../../utils/history'
import {
    isProjectAdminSelector,
    projectSelectorById,
    requiredResultIdsSelector
} from '../../store/selector'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { deleteRequiredResult } from '../../utils/requiredResultsFirestore'
import { fullName } from '../../utils/name'
import { projectDateRange } from '../../utils/date'
import { useParams } from 'react-router-dom'

const DashboardProjectCard: React.FC = () => {
    const firestore = useFirestore()
    const { projectId } = useParams<{ projectId: string }>()
    
    const memoProjectSelectorById = useMemo(() => projectSelectorById, [])
    const project = useSelector((state: RootState) => memoProjectSelectorById(state, projectId))

    const memoRequiredResultIdsSelector = useMemo(() => requiredResultIdsSelector, [])
    const requiredResultIds = useSelector((state: RootState) => memoRequiredResultIdsSelector(state, projectId))

    const memoIsProjectAdminSelector = useMemo(() => isProjectAdminSelector, [])
    const isProjectAdmin = useSelector((state: RootState) => memoIsProjectAdminSelector(state, projectId))

    const deleteProject: () => void = useCallback(() => {
        // Due to firestore feature, although collection gets deleted, subcollections won't be deleted.
        // Manually calling to delete each requiredResult
        requiredResultIds.forEach((requiredResultId: string) => {
            deleteRequiredResult(firestore, projectId, requiredResultIds)
        })
        firestore.delete({ collection: "projects", doc: projectId })
        pushHistoryTo("/")
    }, [requiredResultIds])

    const completeProject = useCallback(() => {
        firestore.update({ collection: "projects", doc: projectId }, { completed: !project.completed })
    }, [project.completed])

    return (
        <div
            data-testid="dashboard-project-card"
        >
            <Title title={project.projectName} />
            <Text text={fullName(project.author.firstName, project.author.lastName)} />
            <Text text={projectDateRange(project.startDate, project.endDate)} />
            <Text text={project.accomplishmentStatement} />
            { isProjectAdmin &&
                <>
                    <CompleteCheckbox
                        label="Complete"
                        value="completed"
                        checked={project.completed}
                        handleInputChange={completeProject}
                    />
                    <NavButton
                        text="Edit Project"
                        path={`/project/${projectId}/edit`}
                    />
                    <Button
                        text="Delete"
                        handleClick={deleteProject}
                    />
                </>
            }
        </div>
    )
}

export default React.memo(DashboardProjectCard)