import React from 'react'
import SignInButton from '../atoms/Buttons/SignInButton';

const SignInSection: React.FC = () => {
    return (
        <div
            data-testid="sing-in-section"
        >
            <SignInButton />
        </div>
    )
}

export default SignInSection
