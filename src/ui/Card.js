import React from 'react'

function Card({ children, className }) {
	return (
		<div
			className={`min-w-full p-5 bg-violet-600 border border-black hover:bg-violet-900 duration-200 ${className}`}
		>
			{children}
		</div>
	)
}

export default Card
