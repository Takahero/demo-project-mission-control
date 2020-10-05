import React from 'react'
import Header from '../organisms/Header'
import SignUpForm from '../organisms/SignUpForm'
import SignInSection from '../organisms/SignInSection'
import NavButton from '../atoms/Buttons/NavButton'
import { Route } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
    return (
        <div
            data-testid="auth-layout"
        >
            <Header />
            <Route
                exact path="/signup"
                component={SignUpForm}
            />
            <Route
                exact path="/signin"
                component={SignInSection}
            />
            <NavButton 
                text="Go back to home"
                path="/"
            />
        </div>
    )
}

export default DashboardLayout
