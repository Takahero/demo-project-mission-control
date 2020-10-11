import React from "react"

interface Props {
	handleClick: any;
}

const CreateRequiredResultButton: React.FC<Props> = ({ handleClick }) => {
	return (
		<button
			data-testid="creat-required-result-button"
			onClick={(e) => {
				e.preventDefault()
				handleClick()
			}}
		>
			Create Required Result
		</button>
	)
}

export default CreateRequiredResultButton
