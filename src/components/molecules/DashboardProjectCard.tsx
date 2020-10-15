import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import CompleteCheckbox from './CompleteCheckbox';
import NavButton from '../atoms/Buttons/NavButton';
import Button from '../atoms/Buttons/Button';
import { useFirestore } from 'react-redux-firebase';
import { pushHistoryTo } from '../../utils/history';
import { requiredResultsSelector } from '../../store/selector';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteRequiredResult } from '../../utils/requiredResultsFirestore';
import { ProjectType } from '../../utils/firestoreDocumentTypes';
import { fullName } from '../../utils/name';
import { projectDateRange } from '../../utils/date';

interface Props {
    project: ProjectType;
    handleInputChange: () => void;
    authed: boolean;
}

const DashboardProjectCard: React.FC<Props> = ({
    project,
    handleInputChange,
    authed,
}) => {
    const firestore = useFirestore()
    const requiredResults = useSelector((state: RootState) => requiredResultsSelector(state, project.id))
    return (
        <div
            data-testid="dashboard-project-card"
        >
            <Title title={project.projectName} />
            <Text text={fullName(project.author.firstName, project.author.lastName)} />
            <Text text={projectDateRange(project.startDate, project.endDate)} />
            <Text text={project.accomplishmentStatement} />
            { authed &&
                <>
                    <CompleteCheckbox
                        label="Complete"
                        value="completed"
                        checked={project.completed}
                        handleInputChange={handleInputChange}
                    />
                    <NavButton
                        text="Edit Project"
                        path={`/project/${project.id}/edit`}
                    />
                    <Button
                        text="Delete"
                        handleClick={() => {
                            // Due to firestore feature, although collection gets deleted, subcollections won't be deleted.
                            // Manually calling to delete each requiredResult
                            requiredResults.forEach((requredResult:any) => {
                                deleteRequiredResult(firestore, project.id, requredResult.id)
                            })
                            firestore.delete({ collection: "projects", doc: project.id })
                            pushHistoryTo("/")
                        }}
                    />
                </>
            }
        </div>
    )
}

export default DashboardProjectCard