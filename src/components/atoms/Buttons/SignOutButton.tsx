import React from "react"
import { clearCurrentUser } from "../../../store/user"
import { pushHistoryTo } from "../../../utils/history"
import { useFirebase } from "react-redux-firebase"

const SignOutButton: React.FC = () => {
	const firebase = useFirebase()
	return (
		<button
			data-testid="sign-out-button"
			onClick={(e) => {
				e.preventDefault()
				firebase.logout().catch((err) => console.error(err))
				pushHistoryTo("/")
			}}
		>
			Sign Out
		</button>
	)
}

export default SignOutButton
