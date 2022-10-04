import React from 'react'

function Card({ children, className }) {
	return (
		<div
			className={`p-5 bg-violet-600 shadow-xl rounded-2xl border flex  border-black hover:bg-violet-900 duration-200 ${className}`}
		>
			{children}
		</div>
	)
}

export default Card
