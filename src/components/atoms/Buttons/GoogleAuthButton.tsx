import React from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { pushHistoryTo } from "../../../utils/history";

interface Props {
	firebase: any;
}

const GoogleAuthButton: React.FC<Props> = ({
	firebase
 }) => {
	return (
		<>
			<StyledFirebaseAuth
				uiConfig={{
					signInFlow: 'popup',
					signInSuccessUrl: '/signedIn',
					signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
					callbacks: {
					signInSuccessWithAuthResult: (authResult, redirectUrl: string) => {
						firebase.handleRedirectResult(authResult).then(() => {
							pushHistoryTo(redirectUrl)
						});
						return false;
					},
					},
				}}
				firebaseAuth={firebase.auth()}
	        />
		</>
	)
}

export default GoogleAuthButton
