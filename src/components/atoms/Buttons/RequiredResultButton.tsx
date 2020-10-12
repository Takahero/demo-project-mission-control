import React from "react"

interface Props {
	text: string;
	setShowingForm: any;
}

const RequiredResultButton: React.FC<Props> = ({
	text,
	setShowingForm
}) => {
	return (
		<button
			data-testid="required-result-button"
			onClick={(e) => {
				e.preventDefault()
				setShowingForm()
			}}
		>
			{text}
		</button>
	)
}

export default RequiredResultButton
