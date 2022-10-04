import React from 'react'

function Input(props) {
	return (
		<input
			className="h-10 py-2 px-4 text-xl max-w-[10rem] rounded-2xl shadow-2xl"
			{...props}
		>
			{props.children}
		</input>
	)
}

export default Input
