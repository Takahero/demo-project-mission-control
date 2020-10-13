import React from "react"

interface Props {
	text: string;
	handleClick: any;
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

export default Button
