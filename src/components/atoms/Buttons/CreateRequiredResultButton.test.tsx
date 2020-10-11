import React from 'react';
import { render } from '../../../utils/testUtils'
import CreateRequiredResultButton from './CreateRequiredResultButton';

it('renders CreateRequiredResultButton', () => {
    const { getByTestId } = render(<CreateRequiredResultButton handleClick={() => {}} /> )

    expect(getByTestId('creat-required-result-button')).toBeTruthy()
})
