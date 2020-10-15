import React from "react"
import Header from "../organisms/Header"
import SignUpForm from "../organisms/SignUpForm"
import SignInForm from "../organisms/SignInForm"
import NavButton from "../atoms/Buttons/NavButton"
import { Route } from "react-router-dom"
import { useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';
import { authSelector } from "../../store/selector"

const DashboardLayout: React.FC = () => {
	const auth = useSelector(authSelector)
	return (
		<div data-testid="auth-layout">
			<Header authed={!isEmpty(auth)} />
			<Route exact path="/signup" component={SignUpForm} />
			<Route exact path="/signin" component={SignInForm} />
			<NavButton text="Go back to home" path="/" />
		</div>
	)
}

export default DashboardLayout
