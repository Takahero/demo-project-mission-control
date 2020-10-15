import React from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { pushHistoryTo } from "../../../utils/history"
import { useFirebase } from 'react-redux-firebase'

const GoogleAuthButton: React.FC = () => {
	const firebase: any = useFirebase() // Need to set type any instead of ExtendedFirebaseInstance due to type issue in package
	//https://github.com/prescottprue/react-redux-firebase/issues/909
	return (
		<StyledFirebaseAuth
			uiConfig={{
				signInFlow: 'popup',
				signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
				callbacks: {
					signInSuccessWithAuthResult: (authResult, redirectUrl: string) => {
						firebase.handleRedirectResult(authResult).then(() => {
							(authResult.additionalUserInfo.isNewUser || !firebase.profile) &&
								firebase.updateProfile({
									firstName: authResult.additionalUserInfo.profile.given_name,
									lastName: authResult.additionalUserInfo.profile.family_name,
								})
							pushHistoryTo(redirectUrl)
						})
						return false
					},
				},
			}}
			firebaseAuth={firebase.auth()}
		/>
	)
}

export default React.memo(GoogleAuthButton)
