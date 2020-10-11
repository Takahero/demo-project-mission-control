import React from 'react';
import { render } from '../../../utils/testUtils'
import DeleteProjectButton from './DeleteProjectButton';

it('renders DeleteProjectButton', () => {
    const { getByTestId } = render(<DeleteProjectButton projectId="erpgoirejher" /> )

    expect(getByTestId('delete-propject-button')).toBeTruthy()
})
