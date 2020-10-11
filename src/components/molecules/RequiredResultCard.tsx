import React from 'react'
import Title from '../atoms/Texts/Title';
import Text from '../atoms/Texts/Text';
import DateRange from '../atoms/Texts/DateRange';

interface Props {
    name: string;
    dateRange: string;
    toDos: Array<{
        name: string;
        completed: boolean;
    }>;
}

const RequiredResultCard: React.FC<Props> = ({
    name,
    dateRange,
    toDos
}) => {
    return (
        <div
            data-testid="required-result-card"
        >
            <Title title={name} />
            <DateRange dateRange={dateRange} /> 
            {
                toDos && toDos.map((toDo, i) => 
                    <Text 
                        text={toDo.name} 
                        key={i}
                    />
                )
            }
        </div>
    )
}

export default RequiredResultCard

            