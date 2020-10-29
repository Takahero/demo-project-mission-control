import React from "react"

interface Props {
	text: string;
	handleClick: (props?: any) => void;
}

const Button: React.FC<Props> = ({
	text,
	handleClick
}) => {
	return (
		<button
			data-testid="button"
			onClick={(e) => {
				e.preventDefault()
				handleClick()
			}}
		>
			{text}
		</button>
	)
}

export default React.memo(Button)
