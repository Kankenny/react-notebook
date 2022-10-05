import React from 'react'

const Input = React.forwardRef((props, ref) => {
	return (
		<input
			className="h-10 py-2 px-4 text-xl max-w-[10rem] rounded-2xl shadow-2xl"
			{...props}
			ref={ref}
		>
			{props.children}
		</input>
	)
})

export default Input
