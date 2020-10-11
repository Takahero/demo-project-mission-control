import React from "react"
import { pushHistoryTo } from "../../../utils/history"
import { useFirestore } from "react-redux-firebase"

interface Props {
	projectId: string;
}

const DeleteProjectButton: React.FC<Props> = ({ projectId }) => {
	const firestore = useFirestore()
	return (
		<button
			data-testid="delete-propject-button"
			onClick={(e) => {
				e.preventDefault()
				firestore.delete({ collection: "projects", doc: projectId })
				pushHistoryTo("/")
			}}
		>
			Delete
		</button>
	)
}

export default DeleteProjectButton
