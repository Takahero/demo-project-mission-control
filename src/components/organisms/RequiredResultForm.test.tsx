import React from 'react';
import { render } from '../../utils/testUtils'
import RequiredResultForm from './RequiredResultForm';


it('renders RequiredResultForm', () => {
    const { getByTestId } = render(
        <RequiredResultForm 
            projectId="projectId" 
            setCreatingRequiredResult={() => {}}
        />
    )

    expect(getByTestId('required-result-form')).toBeTruthy()
})
