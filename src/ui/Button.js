import React from 'react'

function Button(props) {
	return (
		<button
			className={`bg-red-500 rounded-2xl shadow-2xl border border-black py-3 px-6 hover:bg-red-700 duration-200 active:bg-red-900 max-w-xs ${props.className}`}
			{...props}
		>
			{props.children}
		</button>
	)
}

export default Button
