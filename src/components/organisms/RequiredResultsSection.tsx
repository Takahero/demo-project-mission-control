import React, { Key, useState } from 'react'
import RequiredResultCard from '../molecules/RequiredResultCard';
import Title from '../atoms/Texts/Title';
import RequiredResultForm from './RequiredResultForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { requiredResultsSelector } from '../../store/selector';
import Button from '../atoms/Buttons/Button';
import { RequiredResultType } from '../../utils/firestoreDocumentTypes';

interface Props {
    projectId: string;
    authed: boolean;
}

const RequiredResultsSection: React.FC<Props> = ({
    projectId,
    authed
}) => {
    const requiredResults = useSelector((state: RootState) => requiredResultsSelector(state, projectId))
    const [showingForm, setShowingForm] = useState(false)
    return (
        <div
            data-testid="required-results-section"
        >
            <Title title="Required Results" />
            {
                requiredResults && requiredResults.length > 0 &&
                    requiredResults.map((requiredResult: RequiredResultType, i: Key) =>
                        <RequiredResultCard
                            key={i}
                            requiredResultId={requiredResult.id}
                            projectId={projectId}
                            requiredResult={requiredResult}
                            authed={authed}
                        />
                    )
            }
            {
                authed ? (
                    showingForm ?
                        <RequiredResultForm
                            projectId={projectId}
                            authed={authed}
                            setShowingForm={() => {setShowingForm(false)}}
                        />
                    :
                        <Button
                            text="Create Required Result"
                            handleClick={() => setShowingForm(true)}
                        />
                ) : null
            }
        </div>
    )
}

export default RequiredResultsSection